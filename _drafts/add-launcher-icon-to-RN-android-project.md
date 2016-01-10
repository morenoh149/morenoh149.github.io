this is how to add a launcher icon without having to use android studio.

upload you image to http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0&foreColor=607d8b%2C0&crop=0&backgroundShape=bevel&backColor=ffffff%2C100&effects=none

it will generate a zip file for you (click `Download .Zip`)

unzip and drag over the images you need to /android/app/src/main/res/{mipmap-hdpi,mipmap-mdpi,mipmap-xhdpi,mipmap-xxhdpi}

do not (as I originally did) naiively drag and drop the whole folder over your `res` folder.
As you will lose important information in your /res/values/{strings,styles}.xml files
