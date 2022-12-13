=== Content Visibility ===
Contributors: iamfriendly
Donate link: https://girlswhocode.com/
Tags: contentvisibility, block, content, visibility, show, hide
Requires at least: 5.0
Tested up to: 6.1.1
Stable tag: 0.2.9
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Decide when, where, and to whom your blocks are visible.

== Description ==

Your Content. Your Rules. Decide who sees what and when. No setup or complex settings. Write content, decide who should see it, and press publish.

Content Visibility provides a set of controls to say whether each discrete piece of content (or 'block' in WordPress parlance) should be shown to users who are signed in to your site or not. Additional add-ons provide controls for [**role-based**](https://github.com/richardtape/content-visibility-user-role) visibility, [**time-based**](https://wordpress.org/plugins/content-visibility-date-and-time/) visibility, and [**location-based**](https://wordpress.org/plugins/content-visibility-geolocation/) visibility. You can also show or hide blocks to folks using [RSS](https://wordpress.org/plugins/content-visibility-rss-feed/) Readers.

## Individual Block Controls

Every individual block on all posts and pages (and custom post types) on your site can have their own controls. Mix and match the visibility of blocks on a single page. Need some blocks to show to everyone and a few to only be available to your site's subscribers? No problem. Only want a message to appear on Christmas Day? You got it. Only want those who are signed in to your site to see certain pieces of content? Easy peasy.

## At a glance

An icon next to each block with active rules allows your content authors to see which blocks may or may not be shown to certain audiences at a glance.

## Reusable blocks

Use Reusable Blocks? No problem, Content Visibility handles those too.

## Columns and Nested Blocks

Do you use columns and put other blocks in them? Content Visibility allows you to control both the 'nested' blocks (such as a paragraph block in a column block) or the 'parent' block themselves (perhaps hide an entire column for users who aren't signed in?). Other examples of nested blocks are the Group Block or if you use an accordion or tabs block; all work!

## Widgets

Since version 0.1.7 you are now able to control the visibility of your widgets. As long as you have version 9.9 or above of the [Gutenberg plugin](https://wordpress.org/plugins/gutenberg/) you are able to use content visibility on all of your widgets, just like you can with all of your blocks in the content editor. Limit display of your widgets on specific URLs on your site. Want to show a specific text block to only people who are signed in and ONLY on search results? You got it.

Version 0.2.5 adds the ability to show or hide your widgets on posts that are in specific category or tags.

## Coming Soon

 - [ ] A way to set replacement content when a block is hidden
 - [ ] REST API exploration. Should be fine for non-authenticated requests, but need to dive deeper for auth'd requests
 - [ ] Non-trivial dates. Think things like "Every Wednesday between 3pm and 4pm" or "First two weeks in November"
 - [x] [Geolocation](https://wordpress.org/plugins/content-visibility-geolocation/): Show this block only to users whose connection is in France.
 - [x] [Specific Users](https://wordpress.org/plugins/content-visibility-specific-users/): Show or hide a block to one or more specific users.
 - [ ] Specific 3rd-party plugin integrations. Show a block when someone has purchased something from your WooCommerce store. Or when someone has submitted a specific Gravity Form.
 - [ ] Do you have any feature requests? [Let me know!](https://github.com/richardtape/content-visibility/issues/new)

## Development

Development is mostly done on [github](https://github.com/richardtape/content-visibility) and releases are made there and here to the WordPress plugins directory.

== Frequently Asked Questions ==

= What's with the logo? =

It's a chameleon. A cool little creature which can change the way it appears - to make itself more or less visible. Seemed appropriate! Also, your suspicions are correct; a designer, I am not.

= Got a question? =

Let me know: https://github.com/richardtape/content-visibility/issues/new

== Screenshots ==
1. Showing the content visibility controls in the content editor sidebar

== Changelog ==

= 0.2.9 =
* WordPress 6.1.1 compatibility.
* Fixed the styling weirdness causing some blocks to be misaligned when they have rules set.
* Tweaked styling of block inspector controls to fall more in line with newer WP rules.
* Fixed styles of multi-select field for widgets.

= 0.2.8 =
* Fixed an issue where blocks registered with PHP throwing error when rendering it with ServerSideRender components in the editor.

= 0.2.7 =
* Fixed an issue where in some cases the block controls for widgets still weren't appearing on the new 5.8 widgets screen.

= 0.2.6 =
* Fixed issue where the block controls didn't appear on the WordPress 5.8 widgets screen.

= 0.2.5 =
* WordPress 5.8.0 compatibility.
* Added Category and Tag controls for widgets screen. So now you can you say "show this widget (block) when the post being shown has this tag" or maybe "hide this block when the post being shown is in this category". Thanks to Karl Anderson in the support forum for making this request.

= 0.2.4 =
* WordPress 5.7.0 compatibility.
* Nothing really to see here. Fixed an issue with the build script which prevented 0.2.3 from being available in the plugins repo.

= 0.2.3 =
* Content Visibility controls now show on the reusable blocks edit screen in addition to when you insert a reusable block.

= 0.2.2 =
* Content Visibility controls now appear when you select multiple blocks.

= 0.2.1 =
* Fixed bug where data that is only intended to be loaded on the block editor widgets screen was being loaded on all block editor screens. Props @jeremyfelt

= 0.2.0 =
* Added dashboard and settings classes ready for add-ons which require settings.

= 0.1.8 =
* Fixed a bug where setting no special pages may ignore other rules. Not cool.

= 0.1.7 =
* Added content visibility to the block-editor based widgets screen currently only available with the Gutenberg plugin. Enables you to select which posts, pages, or special types of content (such as the 404 error, a search results page, a date archive etc.) where each widget will be shown or hidden.

= 0.1.6 =
* Fixed some minor UI niggles.

= 0.1.5 =
* Content Visibility controls now appear on public custom post types.

= 0.1.4 =
* Icon used to show blocks which have content visibility rules changes depending on whether a block is shown or hidden.

= 0.1.3 =
* Added extra docs for available hooks
* Tidied up code comments
* Added finalized (...for now?) banner and icon
* Added screenshot

= 0.1.2 =
* Turns out 0.1.1 wasn't the first public release because I didn't have the deploy script set up. Brilliant work, Rich.
* Added a 'content_visibility_replace_block_content' filter to allow add-ons to filter what a 'removed' block is replaced with.
* Added a 'content_visibility_replace_nested_block_content' filter to allow add-ons to filter what a 'removed' nested block is replaced with.

= 0.1.1 =
* First public release. Check out the Date and Time Add-on and Role Add-on too!

= 0.1.0 =
* Was meant to be the first public release, but caught a few things (most notably that I had been beaten to the punch on the name of the plugin)

== Upgrade Notice ==

None yet.