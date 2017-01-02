==========
Clean Blog
==========

A minimal theme for Plone 5.x

.. image:: https://raw.githubusercontent.com/collective/plonetheme.clean_blog/master/demo.jpg

See additional screenshots below.

Installation
------------

Zip
~~~~~~~~

#. Download the `zip file`_
#. Import the theme from the Diazo theme control panel.

Buildout
~~~~~~~~

Install plonetheme.cleanblog by adding it to your buildout. Note the correct name of the egg!::

    [buildout]

    ...

    eggs =
        plonetheme.cleanblog


and then running ``bin/buildout``

Documentation
-------------

Full documentation for end users can be found `here`_

Contribution
-------------

- Clone the repo.
- Run ``bin/buildout``
- next, install the local dependencies theme requires
    ``$ npm install``
- Watch For Changes & Automatically Refresh
    ``$ grunt watch``
- Build & Optimize(This will create a ``dist`` folder with optimized files and a zip of theme)
    ``$ grunt dist``

License
-------

MIT License

Credit
------

Based on `Clean Blog Bootstrap Blog Theme Start Bootstrap`_

.. _zip file: https://github.com/collective/plonetheme.clean_blog/blob/master/plonetheme.clean_blog.zip?raw=true
.. _Clean Blog Bootstrap Blog Theme Start Bootstrap: http://startbootstrap.com/template-overviews/clean-blog/
.. _here: https://github.com/collective/plonetheme.clean_blog/blob/master/docs/index.rst

Screenshots
-----------

Full size screenshot:

.. image:: https://raw.githubusercontent.com/collective/plonetheme.clean_blog/master/docs/plonetheme.clean_blog-screenshot.jpg

iPhone Plus screenshot:

.. image:: https://raw.githubusercontent.com/collective/plonetheme.clean_blog/master/docs/plonetheme.clean_blog-screenshot-iphone-plus.jpg
