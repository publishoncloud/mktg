var ad_box = document.getElementById('pubgen_ad');
ad_box.style.width='80%';
ad_box.style.height='120px';
ad_box.style.backgroundColor='#000';
ad_box.style.marginRight='auto';
ad_box.style.marginLeft='auto';
ad_box.style.backgroundImage='url("https://www.sandeepmaheshwari.com/images/MyFavourites.jpg")';
ad_box.style.backgroundSize='cover';
ad_box.style.backgroundPosition='center center';
ad_box.style.position='relative';
ad_box.style.overflow='hidden';
var ad_data = '<div class="ad_text" style="position: absolute;width: 300px;height: 60px;background: rgba(0, 0, 0, 0.70);color: #FFF; border-radius: 0% 0% 100px 0%;line-height: 60px;font-weight: bold;font-size: 20px;"><span style="font-size: 30px;padding-right: 5px;padding-left: 40px;">Book</span><span>x</span></div><a href="http://pubgen.com/" target="_blank" sty><div style="width:100%;height:100%;top:0px;left:0px;"></div></a>';
ad_box.innerHTML=ad_data;
