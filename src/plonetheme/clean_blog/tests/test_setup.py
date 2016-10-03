# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plonetheme.clean_blog.testing import PLONETHEME_CLEAN_BLOG_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that plonetheme.clean_blog is properly installed."""

    layer = PLONETHEME_CLEAN_BLOG_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if plonetheme.clean_blog is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'plonetheme.clean_blog'))

    def test_browserlayer(self):
        """Test that IPlonethemeCleanBlogLayer is registered."""
        from plonetheme.clean_blog.interfaces import (
            IPlonethemeCleanBlogLayer)
        from plone.browserlayer import utils
        self.assertIn(IPlonethemeCleanBlogLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = PLONETHEME_CLEAN_BLOG_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['plonetheme.clean_blog'])

    def test_product_uninstalled(self):
        """Test if plonetheme.clean_blog is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'plonetheme.clean_blog'))

    def test_browserlayer_removed(self):
        """Test that IPlonethemeCleanBlogLayer is removed."""
        from plonetheme.clean_blog.interfaces import IPlonethemeCleanBlogLayer
        from plone.browserlayer import utils
        self.assertNotIn(IPlonethemeCleanBlogLayer, utils.registered_layers())
