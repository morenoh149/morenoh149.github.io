use fortune and the LOST tips to learn all of linux in babysteps

`brew install fortune`

add to .bash_profile
```
fortune
```

download the LOST tips database (first link) http://lost.sourceforge.net/i.php?language=en&page=23

backup the default fortunes `mv /usr/local/Cellar/fortune/9708/share/games/fortunes /usr/local/Cellar/fortune/9708/share/games/fortunes-bkup`
open the archive `tar -xf LOST-en.750.fortune.tar`
go into the dir `cd LOST-en.750.fortune`
rename the database `mv LOST-en.750.fortune.db lost`
create the random access version of the database `strfile -i lost lost.dat`
copy the tips over `cp -R LOST-en.750.fortune/LOST-en.750.fortune.db /usr/local/Cellar/fortune/9708/share/games/fortunes`
