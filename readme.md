# Content Visibility

Decide when, where, and to whom to show each block on every page of your WordPress site.

Content Visibility provides a set of controls to say whether each discrete piece of content (or 'block' in WordPress parlance) should be shown to users who are signed in to your site or not. Additional add-ons provide controls for [role-based visibility](https://github.com/richardtape/content-visibility-user-role) and [time-based visibility](https://github.com/richardtape/content-visibility-date-and-time).

## Individual Block Controls

Every individual block on all posts and pages on your site can have their own controls. Mix and match the visibility of blocks on a single page. Need some blocks to show to everyone and a few to only be available to your site's subscribers? No problem. Only want a message to appear on Christmas Day? You got it. Only want those who are signed in to your site to see certain pieces of content? Easy peasy.

## At a glance

An icon next to each block with active rules allows your content authors to see which blocks may or may not be shown to certain audiences at a glance.

## Reusable blocks

Use Reusable Blocks? No problem, Content Visibility handles those too.

## Show me the goodies!

![Screenshot showing content visibility controls including the icon which allows content authors to see which of their blocks have content visibility rules in place](https://richardtape.com/wp-content/uploads/2020/12/content-visibility-1.png)

## Coming Soon

 - [ ] A way to set replacement content when a block is hidden
 - [ ] Make content visibility controls available on public Custom Post Types by default
 - [ ] Ensure this works with the new 'widgets' screen (controls appear but functionality is currently blocked by [this gutenberg bug](https://github.com/WordPress/gutenberg/issues/27173))
 - [ ] REST API exploration. Should be fine for non-authenticated requests, but need to dive deeper for auth'd requests
 - [ ] Non-trivial dates. Think things like "Every Wednesday between 3pm and 4pm" or "First two weeks in November"
 - [ ] Geolocation: Show this block only to users whose connection is in France
 - [ ] Specific Users: Only show a block when a specific user is signed in
 - [ ] Do you have any feature requests? [Let me know!](https://github.com/richardtape/block-visibility/issues/new)

## Who made this?

My name's [Rich Tape](https://richardtape.com/). Hi!

## What's with the references to "Block Visibility" in the code?

As you can see I've had this repo online for quite some time. I've had the idea [written down for much longer](https://richardtape.com/2018/11/09/scheduled-blocks/) and a [precursor to this plugin online](https://github.com/richardtape/scheduled-blocks/commit/2294fd91a3107c6fa34220901c994739961d95b0) since 2018. But, well, I'm slow. And because I'm slow, Nick Diego and Outermost Design beat me to the punch on the plugins repo. [Nick's plugin](https://wordpress.org/plugins/block-visibility/) is excellent and I'd highly recommend you check that out. I'm also encouraged to see that we've made several decisions that are very similar which means we're probably on to something.

I've changed the name of this plugin to Content Visibility, not just because I wanted to avoid a clash and subsequent confusion for our users, but also because I think it better reflects what this set of plugins does. They allow you to control the visibility of your content.

If you're seeing references to 'block visibility', it's likely I haven't migrated something over to the new name yet, I've missed something when renaming stuff, or maybe you're looking at the history of this repo (in which case please do not judge past me's code, it was likely even more terrible than code I wrote more recently).