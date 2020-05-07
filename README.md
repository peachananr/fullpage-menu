#Full Page Menu by Pete R.
A jQuery plugin that let you Create a full page, Fully Animated Menu with CSS3 for your Navigation
Created by [Pete R.](http://www.thepetedesign.com), Founder of [Travelistly](http://www.travelistly.com) and [BucketListly](http://www.bucketlistly.com)

**Note**: The plugin is inspired by [Handsome.is](http://handsome.is/ux-design/)

**License**: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)



## Demo
[View demo](http://peachananr.github.io/fullpage-menu/demo/fullpage-menu_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and mobile have been tested. 

## Basic Usage
To use this plugin, simply include the latest jQuery library (preferably version 2.0.0 or higher) together with `jquery.fullpage-menu.js` and `fullpage-menu.css` into your document's `<head>` follow by an HTML markup as follows:

````html
<body>
  ..
  <div class="sidemenu">
    <ul class="fm-first-level">
      <li><a href="#menu1">..</a></li>
      ..
    </ul>
    <nav id="menu1" class="active">
      <a target="_blank" href="#">
        <span class="subtitle">...</span>
        Link Title
      </a>
      ..
    </nav>
  ..
</body>

````

The first section of the markup is used to create a tab functionality allowing you to have multiple levels navigation inside your menu. Elements under `fm-first-level` are buttons that will be used to activate the tab. The `href` attribute of these elements should reflect the ID attribute of the tab content itself. 

For example, from above, the `<nav>` (the tab content) element has `menu1` as an ID. The first button inside `fm-first-level` with `href` that matches the ID will trigger that tab.
  
Links inside the `<nav>` tag will be used as the target area for users to click on. The `span` with "subtitle" as a class name will let you add a little description of the link which will be shown together with the link title.

Once you got your menu setup, call the function as follows:

````javascript
 $(".sidemenu").fullpageMenu({
   openButton: "Menu",        // This option allows you to define the content of the open menu button. The default value is "Menu"
   closeButton: "Close X",    // This option allows you to define the content of the close menu button. The default value is "Close X"
   animationSpeed: 100,       // This option lets you control the speed of the animation of each navigation items. The option accepts milliseconds. The default value is 100.
   autoNumber: true,          // This option lets you enable/disable to automatic numbering on menu items. The default value is true.
   animation: "fadeInLeft"    // This option lets you define what type of animation you want. Available options are "fadeInLeft", "fadeInRight", "fadeInUp" and "fadeInDown". 
 });
````

**Note**: For **animation** option, this plugin also supports [Animate.css animation framework](http://daneden.github.io/animate.css/) by [Daniel Eden](http://daneden.me/). Simply put his animation class name there and the plugin should animate the way it should.

## Public Method

### $.fn.openMenu()

With this method, you can open the menu programmatically by calling the `openMenu()` function like this:

````javascript
$(".sidemenu").openMenu();
````

### $.fn.closeMenu()

Same goes for this method. You can close the menu programmatically by calling the `closeMenu()` function like this:

````javascript
$(".sidemenu").closeMenu();
````

That's all for this plugin. If you like it, don't forget to share this with your friends.

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#plugins), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- The plugin is inspired by [Handsome.is](http://handsome.is/ux-design/)
- [Animate.css animation framework](http://daneden.github.io/animate.css/) by [Daniel Eden](http://daneden.me/)
- Tutorial (Coming Soon)
