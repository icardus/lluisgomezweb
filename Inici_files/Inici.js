// Created by iWeb 3.0.4 local-build-20150122

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id10" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="132" height="16" style="height: 16px; left: 47px; position: absolute; top: 741px; width: 132px; z-index: 1; "><param name="src" value="Media/Llui%CC%81s%20Go%CC%81mez%20web.mp3" /><param name="starttime" value="00:00:06:17.1" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id10" type="video/quicktime" width="132" height="16" style="height: 16px; left: 47px; position: absolute; top: 741px; width: 132px; z-index: 1; "><param name="src" value="Media/Llui%CC%81s%20Go%CC%81mez%20web.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id10" type="video/quicktime" width="132" height="16" data="Media/Llui%CC%81s%20Go%CC%81mez%20web.mp3" starttime="00:00:06:17.1" style="height: 16px; left: 47px; position: absolute; top: 741px; width: 132px; z-index: 1; "><param name="src" value="Media/Llui%CC%81s%20Go%CC%81mez%20web.mp3"/><param name="starttime" value="00:00:06:17.1"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Inici_files/IniciMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');fixupIECSS3Opacity('id3');fixupIECSS3Opacity('id4');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');fixupIECSS3Opacity('id7');fixupIECSS3Opacity('id8');fixupIECSS3Opacity('id9');applyEffects()}
