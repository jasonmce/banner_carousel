# Banner Carousel

## Overview

Provide a complete Banner Carousel block solution for Drupal 9+ using Views, Simple Carousel, and ECK.  

- Custom Banner Image entity type for the banner carousel items.
- Block to display the banner carousel.
- Admin view of the banner carousel items.

## Installation

### Add the package to composer

Add the following repository to your composer.json file:

```
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/jasonmce/banner_carousel"
        }    
```

Add the following require to your composer.json file:

```
"require":
        "jasonmce/banner-carousel": "^1.0"
```

Run `composer update`

Run `drush en banner-carousel -y`

## Usage

Add a new banner carousel item at /admin/content/banner-carousel-item.

Administer the banner carousel items at
- /admin/banner-carousel
- Content > Banner Carousel

Add the Banner Carousel block to a region.

