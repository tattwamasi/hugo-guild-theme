# Hugo Guild Theme
#### A simple, elegant guild theme for Hugo static websites

A plain name for a plain theme and an aspirational, hopefully descriptive subtitle.

This theme came about due to my need for a simple, clean looking basic website
for my World of Warcraft guild.  I'd had some basic experience building sites
with Hugo before, and thought others may find this useful.

I tried to make it pretty flexible and easy to customize.  Thanks to the CSS
framework and the Hugo theme system, it should be pretty easy to make it reflect
your guild or group as needed.

Most basic configuration is done in `config.toml`.  See the
[Hugo documentation](https://gohugo.io/themes/customizing/) for deeper documentation
on how to do more, and check out the included sample site, as well as other live
sites using the theme (and let me know if you're using it and would like your site
listed as an example).

One major item to remember.  This theme is designed with the Hugo `relativeURLs=true`
setting in mind.  At this time, that means that you will need to set the `baseurl`
to a non subdirectory including URL for the theme and your site to work without modification.
Example, `baseurl="http://mysite.com/""` works, as does `baseurl="/"`, but `baseurl="myhost.com/mysite/"` will **not**.
I hope this changes in the future, and I'll update the theme as I can to make that happen.
####  Demo Sites:

  Farsight Guild website - www.farsight-guild.com

  ...

## Features:
* easy basic functionality driven via `config.toml`
* Of course, you have the full power of Hugo theme customization, but also
intermediate, fast customization via header_custom.html and footer_custom.html
partial templates pre-plumbed to be used, along with placeholder assets
* banner
  * image with "parallax-ish" scroll :grin:
  * CSS font/logo effects
* sticky nav bar
* button and clearfix shortcodes, and lots of CSS classes to make your content
look good, including left, right, and size to fit image classes
* basic sections of about, news posts, and widgets for warcraft logs and discord


## Credits:

Banner scroll/fade at the top inspired by [Ask Mr. Robot's blog](http://blog.askmrrobot.com) and myriad other parallax-ish header scroll effects.

Overall theme starting point is from the Archetype theme from the wonderful [HTML5UP](https://html5up.net) / [Pixelarity](https://pixelarity.com) folks.
While they have lots available for free under very reasonable license at [HTML5UP](https://html5up.net),
you can also buy licenses for wider use and see more themes through their [Pixelarity](https://pixelarity.com) site/service.
I did purchase through Pixelarity and regard it as a great resource.

Their theme work and their CSS serve as the base I started form for this theme,
but please regard all cruft and inelegant stuff as purely my fault.  As you can see from their pages, their stuff speaks for itself.

[Sticky element javascript](http://stickyjs.com/) by [Anthony Garand](http://garand.me)

[Leas Verou](http://lea.verou.me/) for lots of amazing writing about various
CSS topics, as well as the great [prefixfree](http://leaverou.github.io/prefixfree/) library.

[Hugo](https://gohugo.io) and the devs who put so much hard work into it.

[Blizzard](https://blizzard.com) for great games that have kept me probably far too involved for far too long.

[Sunnier](https://twitter.com/sunnierbrew), for (unknowingly) inspiring me to mess around with coding our guild's website due to her long-lived and well designed [site and blog](http://sunniersartofwar.com).
