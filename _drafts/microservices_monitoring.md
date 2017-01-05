
You should warn people in a company if your software is down. You should not wait until a customer reports
that some function of your software is unable to be done.

You should monitor your software and raise alerts when some health check fails.

http://byterot.blogspot.ca/2014/11/health-endpoint-in-api-design-slippery-rest-api-design-canary-endpoint-hysterix-asp-net-web-api.html

["How NOT to measure Latency"](https://www.youtube.com/watch?v=lJ8ydIuPFeU)
* plot the max bad thing
* the 99% percentile is still not enough
* though 95% percentile is very common graph
* because most webpages have 100+ network requests, the odds of actually experiencing the 99% percentile slowness
is actually very high (80+ % chance)
* Median Server Response Time: The number that 99.999999999% of page views can be worse than

[Metrics, Metrics, Everywhere - Coda Hale](https://www.youtube.com/watch?v=czes-oa0yik)
* our code generates business value when it runs, not when we write it
* we can't know until we measure
* you must also measure the right thing
* the map is not the territory
  * but we can always improve our map
  * improving our map allows us to make better decisions
  * improving our map lets us focus our limited efforts on the highest impact items
* measure your code in production
* OODA
  * Observe
  * Orient
  * Decide
  * Act

http://patrobinson.github.io/2016/06/24/stop-doing-shitty-health-checks/

https://github.com/beamly/SE4/blob/master/SE4.md

http://blog.cloud-elements.com/the-5-pitfalls-of-api-monitoring

https://artofmonitoring.com/
