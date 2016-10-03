==========
Clean Blog
==========

A minimal theme for Plone 5.

.. image:: https://raw.githubusercontent.com/vikas-parashar/plonetheme.clean_blog/master/demo.jpg

Installation
------------

Zip
~~~~~~~~

#. Download the `zip file`_
#. Import the theme from the Diazo theme control panel.

Buildout
~~~~~~~~

Install plonetheme.clean_blog by adding it to your buildout::

    [buildout]

    ...

    eggs =
        plonetheme.clean_blog


and then running ``bin/buildout``

Demo
~~~~

   This theme can be seen in action at the following site:

-  `Clean Blog Demo`_

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

.. _zip file: https://github.com/vikas-parashar/plonetheme.clean_blog/blob/master/plonetheme.clean_blog.zip?raw=true
.. _Clean Blog Demo: http://107.170.136.197:8080/Plone
.. _Clean Blog Bootstrap Blog Theme Start Bootstrap: http://startbootstrap.com/template-overviews/clean-blog/
.. _here: https://github.com/vikas-parashar/plonetheme.clean_blog/blob/master/docs/index.rst
