/*

<javascriptresource>
<name>Get Path Components...</name>
<about>Get Path Components v3.9

Paths utility script using the "JSON Action Manager" scripting library. © 2011-2013 Michel MARIANI.
</about>
<menu>automate</menu>
<category>JSON Action Manager Paths Utility</category>
</javascriptresource>

*/

//------------------------------------------------------------------------------
// File: Get Path Components.js
// Version: 3.9
// Release Date: 2013-10-21
// Copyright: © 2011-2013 Michel MARIANI <http://www.tonton-pixel.com/blog/>
// Licence: GPL <http://www.gnu.org/licenses/gpl.html>
//------------------------------------------------------------------------------
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//------------------------------------------------------------------------------
// Version History:
//  3.9:
//  - Used new version of jamEngine scripting library module.
//  3.8:
//  - Used new version of scripting library modules.
//  - Used new explicit format.
//  3.7:
//  - Simplified script name to "Get Path Components".
//  3.6:
//  - Used new version of scripting library modules.
//  3.5:
//  - Used jamUtils.writeTextFile () in replacement of custom code.
//  3.4:
//  - Added 'TEXT' Mac OS type to newly created JSON file.
//  3.3:
//  - Used new version of scripting library modules.
//  3.2:
//  - Incremented version number to keep in sync with scripting library modules.
//  3.1:
//  - Incremented version number to keep in sync with scripting library modules.
//  3.0:
//  - Applied the redefined JSON AM Reference format.
//  2.0:
//  - Initial release.
//------------------------------------------------------------------------------

// jamEngine.jsxinc v3.6.3 (minified)
if(!this.jamEngine) {this.jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("\n[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("\n[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("\n[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("\n[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("\n[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("\n[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","patternFill":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("\n[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("\n[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("\n[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("\n[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("\n[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("\n[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("\n[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("\n[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("\n[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("\n[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("\n[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("\n[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("\n[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}
// jamHelpers.jsxinc v3.6 (minified)
if(!this.jamHelpers) {this.jamHelpers={};(function() {jamHelpers.toColorObject=function(color) {var colorObject;if(color.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue;switch(key) {case"book":case"name":typedValue=["<string>",localize(value)];break;case"bookKey":typedValue=["<data>",value];break;case"bookID":typedValue=["<integer>",value];break;case"a":case"b":case"black":case"blue":case"brightness":case"cyan":case"gray":case"green":case"luminance":case"magenta":case"red":case"saturation":case"yellowColor":typedValue=["<double>",value];break;case"hue":typedValue=["<unitDouble>",["angleUnit",value]];break;case"color":var colorClass;if((("book"in value)&&("name"in value))||(("bookID"in value)&&("bookKey"in value))) {colorClass="bookColor";} else if(("cyan"in value)&&("magenta"in value)&&("yellowColor"in value)&&("black"in value)) {colorClass="CMYKColorClass";} else if("gray"in value) {colorClass="grayscale";} else if(("hue"in value)&&("saturation"in value)&&("brightness"in value)) {colorClass="HSBColorClass";} else if(("luminance"in value)&&("a"in value)&&("b"in value)) {colorClass="labColor";} else if(("red"in value)&&("green"in value)&&("blue"in value)) {colorClass="RGBColor";} typedValue=["<object>",[colorClass,restoreDesc(value)]];break;default:typedValue=null;break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} colorObject=restoreDesc({"color":color})["color"];} else if(color.constructor===Array) {var colorClass=color[0];switch(jamEngine.uniIdStrToId(colorClass)) {case jamEngine.uniIdStrToId("bookColor"):switch(color[1].length) {case 2:if(typeof color[1][0]==='string') {colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]]}]];} else if(typeof color[1][0]==='number') {colorObject=["<object>",["bookColor",{"bookID":["<integer>",color[1][0]],"bookKey":["<data>",color[1][1]]}]];} break;case 4:colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]],"bookID":["<integer>",color[1][2]],"bookKey":["<data>",color[1][3]]}]];break;} break;case jamEngine.uniIdStrToId("CMYKColorClass"):colorObject=["<object>",["CMYKColorClass",{"cyan":["<double>",color[1][0]],"magenta":["<double>",color[1][1]],"yellowColor":["<double>",color[1][2]],"black":["<double>",color[1][3]]}]];break;case jamEngine.uniIdStrToId("grayscale"):colorObject=["<object>",["grayscale",{"gray":["<double>",(color[1].constructor===Array)?color[1][0]:color[1]]}]];break;case jamEngine.uniIdStrToId("HSBColorClass"):colorObject=["<object>",["HSBColorClass",{"hue":["<unitDouble>",["angleUnit",color[1][0]]],"saturation":["<double>",color[1][1]],"brightness":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("labColor"):colorObject=["<object>",["labColor",{"luminance":["<double>",color[1][0]],"a":["<double>",color[1][1]],"b":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("RGBColor"):colorObject=["<object>",["RGBColor",{"red":["<double>",color[1][0]],"green":["<double>",color[1][1]],"blue":["<double>",color[1][2]]}]];break;default:throw new Error("\n[jamHelpers.toColorObject] Unrecognized color class: "+colorClass);break;}} return colorObject;};jamHelpers.fromColorObject=function(colorObject,explicit) {var color;if(explicit) {color=jamEngine.simplifyObject(colorObject);} else {var normalizedColorObject=jamEngine.normalizeJsonItem(colorObject,{meaningfulIds:true,parseFriendly:true});var colorClass=normalizedColorObject[1][0];var colorDesc=normalizedColorObject[1][1];switch(colorClass) {case"bookColor":var book=colorDesc["book"][1];var name=colorDesc["name"][1];if(("bookID"in colorDesc)&&("bookKey"in colorDesc)) {var bookID=colorDesc["bookID"][1];var bookKey=colorDesc["bookKey"][1];color=[colorClass,[book,name,bookID,bookKey]];} else {color=[colorClass,[book,name]];} break;case"CMYKColorClass":var cyan=colorDesc["cyan"][1];var magenta=colorDesc["magenta"][1];var yellowColor=colorDesc["yellowColor"][1];var black=colorDesc["black"][1];color=[colorClass,[cyan,magenta,yellowColor,black]];break;case"grayscale":var gray=colorDesc["gray"][1];color=[colorClass,[gray]];break;case"HSBColorClass":var hue=colorDesc["hue"][1][1];var saturation=colorDesc["saturation"][1];var brightness=colorDesc["brightness"][1];color=[colorClass,[hue,saturation,brightness]];break;case"labColor":var luminance=colorDesc["luminance"][1];var a=colorDesc["a"][1];var b=colorDesc["b"][1];color=[colorClass,[luminance,a,b]];break;case"RGBColor":var red=colorDesc["red"][1];var green=colorDesc["green"][1];var blue=colorDesc["blue"][1];color=[colorClass,[red,green,blue]];break;default:throw new Error("\n[jamHelpers.fromColorObject] Unrecognized color class: "+colorClass);break;}} return color;};jamHelpers.toGradientObject=function(gradient) {var gradientObject;if(gradient.constructor===Object) {var that=this;function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue;var restoredList;switch(key) {case"showTransparency":case"vectorColor":typedValue=["<boolean>",value];break;case"name":typedValue=["<string>",localize(value)];break;case"gradientForm":typedValue=["<enumerated>",["gradientForm",value]];break;case"type":typedValue=["<enumerated>",["colorStopType",value]];break;case"colorSpace":typedValue=["<enumerated>",["colorSpace",value]];break;case"location":case"midpoint":case"randomSeed":case"smoothness":typedValue=["<integer>",value];break;case"interpolation":typedValue=["<double>",value];break;case"opacity":typedValue=["<unitDouble>",["percentUnit",value]];break;case"colors":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["colorStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"transparency":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["transparencyStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"minimum":case"maximum":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"color":typedValue=that.toColorObject(value);break;case"gradient":typedValue=["<object>",["gradientClassEvent",restoreDesc(value)]];break;default:typedValue=null;break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} gradientObject=restoreDesc({"gradient":gradient})["gradient"];} else if(gradient.constructor===Array) {var gradientObj={};var gradientName=gradient[0];if(gradientName) {gradientObj["name"]=["<string>",gradientName];} var gradientForm=gradient[1];gradientObj["gradientForm"]=["<enumerated>",["gradientForm",gradientForm]];switch(jamEngine.uniIdStrToId(gradientForm)) {case jamEngine.uniIdStrToId("customStops"):gradientObj["interpolation"]=["<double>",gradient[2]];var colorStops=gradient[3];var colorsArr=[];for(var i=0;i<colorStops.length;i++) {var colorStopObj={};colorStopObj["location"]=["<integer>",colorStops[i][0]];colorStopObj["midpoint"]=["<integer>",colorStops[i][1]];var type=colorStops[i][2];colorStopObj["type"]=["<enumerated>",["colorStopType",type]];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("userStop"):colorStopObj["color"]=this.toColorObject(colorStops[i][3]);break;case jamEngine.uniIdStrToId("backgroundColor"):case jamEngine.uniIdStrToId("foregroundColor"):break;default:throw new Error("\n[jamHelpers.toGradientObject] Unrecognized color stop type: "+type);break;} colorsArr.push(["<object>",["colorStop",colorStopObj]]);} gradientObj["colors"]=["<list>",colorsArr];var transparencyStops=gradient[4];if(typeof transparencyStops!=='undefined') {var transparencyArr=[];for(var j=0;j<transparencyStops.length;j++) {var transparencyStopObj={};transparencyStopObj["location"]=["<integer>",transparencyStops[j][0]];transparencyStopObj["midpoint"]=["<integer>",transparencyStops[j][1]];transparencyStopObj["opacity"]=["<unitDouble>",["percentUnit",transparencyStops[j][2]]];transparencyArr.push(["<object>",["transparencyStop",transparencyStopObj]]);} gradientObj["transparency"]=["<list>",transparencyArr];} break;case jamEngine.uniIdStrToId("colorNoise"):gradientObj["randomSeed"]=["<integer>",gradient[2]];gradientObj["showTransparency"]=["<boolean>",gradient[3]];gradientObj["vectorColor"]=["<boolean>",gradient[4]];gradientObj["smoothness"]=["<integer>",gradient[5]];var colorSpace=gradient[6];gradientObj["colorSpace"]=["<enumerated>",["colorSpace",colorSpace]];switch(jamEngine.uniIdStrToId(colorSpace)) {case jamEngine.uniIdStrToId("RGBColor"):case jamEngine.uniIdStrToId("HSBColorEnum"):case jamEngine.uniIdStrToId("labColor"):break;default:throw new Error("\n[jamHelpers.toGradientObject] Unrecognized color space: "+colorSpace);break;} gradientObj["minimum"]=this.toIntegerList(gradient[7]);gradientObj["maximum"]=this.toIntegerList(gradient[8]);break;default:throw new Error("\n[jamHelpers.toGradientObject] Unrecognized gradient form: "+gradientForm);break;} gradientObject=["<object>",["gradientClassEvent",gradientObj]];} return gradientObject;};jamHelpers.fromGradientObject=function(gradientObject,explicit) {var gradient;if(explicit) {gradient=jamEngine.simplifyObject(gradientObject);} else {gradient=[];var normalizedGradientObject=jamEngine.normalizeJsonItem(gradientObject,{meaningfulIds:true,parseFriendly:true});var gradientDesc=normalizedGradientObject[1][1];var name=gradientDesc["name"];gradient.push((name)?name[1]:null);var gradientForm=gradientDesc["gradientForm"][1][1];gradient.push(gradientForm);switch(gradientForm) {case"customStops":gradient.push(gradientDesc["interpolation"][1]);var colors=gradientDesc["colors"][1];var colorStops=[];for(var i=0;i<colors.length;i++) {var colorStop=colors[i][1][1];var colorStopArr=[];colorStopArr.push(colorStop["location"][1]);colorStopArr.push(colorStop["midpoint"][1]);var type=colorStop["type"][1][1];colorStopArr.push(type);switch(type) {case"userStop":colorStopArr.push(this.fromColorObject(colorStop["color"]));break;case"backgroundColor":case"foregroundColor":break;default:throw new Error("\n[jamHelpers.fromGradientObject] Unrecognized color stop type: "+type);break;} colorStops.push(colorStopArr);} gradient.push(colorStops);var transparency=gradientDesc["transparency"][1];var transparencyStops=[];for(var j=0;j<transparency.length;j++) {var transparencyStop=transparency[j][1][1];var transparencyStopArr=[];transparencyStopArr.push(transparencyStop["location"][1]);transparencyStopArr.push(transparencyStop["midpoint"][1]);transparencyStopArr.push(transparencyStop["opacity"][1][1]);transparencyStops.push(transparencyStopArr);} gradient.push(transparencyStops);break;case"colorNoise":gradient.push(gradientDesc["randomSeed"][1]);gradient.push(gradientDesc["showTransparency"][1]);gradient.push(gradientDesc["vectorColor"][1]);gradient.push(gradientDesc["smoothness"][1]);var colorSpace=gradientDesc["colorSpace"][1][1] gradient.push(colorSpace);switch(colorSpace) {case"RGBColor":case"HSBColorEnum":case"labColor":break;default:throw new Error("\n[jamHelpers.fromGradientObject] Unrecognized color space: "+colorSpace);break;} gradient.push(this.fromIntegerList(gradientDesc["minimum"]));gradient.push(this.fromIntegerList(gradientDesc["maximum"]));break;default:throw new Error("\n[jamHelpers.fromGradientObject] Unrecognized gradient form: "+gradientForm);break;}} return gradient;};jamHelpers.toCurvesAdjustmentList=function(curvesAdjustmentsArr) {var curvesAdjustmentListArr=[];for(var i=0;i<curvesAdjustmentsArr.length;i++) {var curvesAdjustment=curvesAdjustmentsArr[i];var channel=["<reference>",[["channel",["<enumerated>",["channel",curvesAdjustment[0]]]]]];var info=curvesAdjustment[1];var type=info[0];var points=info[1];var pointArr=[];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("mapping"):for(var j=0;j<points.length;j++) {pointArr.push(["<integer>",points[j]]);} var mapping=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"mapping":mapping}]]);break;case jamEngine.uniIdStrToId("curve"):for(var j=0;j<points.length;j++) {var point=["<object>",["point",{"horizontal":["<double>",points[j][0]],"vertical":["<double>",points[j][1]]}]];pointArr.push(point);} var curve=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"curve":curve}]]);break;default:throw new Error("\n[jamHelpers.toCurvesAdjustmentList] Unrecognized curve type");break;}} return["<list>",curvesAdjustmentListArr];};jamHelpers.toHueSatAdjustmentV2List=function(hueSatAdjustmentsArr) {var hueSatAdjustmentListArr=[];for(var i=0;i<hueSatAdjustmentsArr.length;i++) {var hueSatAdjustmentArr=hueSatAdjustmentsArr[i];var hueSatAdjustmentObj;if((hueSatAdjustmentArr.length===3)&&(i===0)) {hueSatAdjustmentObj={"hue":["<integer>",hueSatAdjustmentArr[0]],"saturation":["<integer>",hueSatAdjustmentArr[1]],"lightness":["<integer>",hueSatAdjustmentArr[2]]};} else if(hueSatAdjustmentArr.length===(1+4+3)) {hueSatAdjustmentObj={"localRange":["<integer>",hueSatAdjustmentArr[0]],"beginRamp":["<integer>",hueSatAdjustmentArr[1]],"beginSustain":["<integer>",hueSatAdjustmentArr[2]],"endSustain":["<integer>",hueSatAdjustmentArr[3]],"endRamp":["<integer>",hueSatAdjustmentArr[4]],"hue":["<integer>",hueSatAdjustmentArr[5]],"saturation":["<integer>",hueSatAdjustmentArr[6]],"lightness":["<integer>",hueSatAdjustmentArr[7]]};} hueSatAdjustmentListArr.push(["<object>",["hueSatAdjustmentV2",hueSatAdjustmentObj]]);} return["<list>",hueSatAdjustmentListArr];};jamHelpers.toBlendRangeList=function(blendRanges) {var blendRangeListArr=[];var blendRangeObject;for(var i=0;i<blendRanges.length;i++) {var blendRange=blendRanges[i];if(blendRange.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue;switch(key) {case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;case"srcBlackMin":case"srcBlackMax":case"srcWhiteMin":case"srcWhiteMax":case"destBlackMin":case"destBlackMax":case"destWhiteMin":case"destWhiteMax":typedValue=["<integer>",value];break;case"blendRange":typedValue=["<object>",["blendRange",restoreDesc(value)]];break;default:typedValue=null;break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} blendRangeObject=restoreDesc({"blendRange":blendRange})["blendRange"];} else if(blendRange.constructor===Array) {blendRangeObject=["<object>",["blendRange",{"channel":["<reference>",[["channel",["<enumerated>",["channel",blendRange[0]]]]]],"srcBlackMin":["<integer>",blendRange[1]],"srcBlackMax":["<integer>",blendRange[2]],"srcWhiteMin":["<integer>",blendRange[3]],"srcWhiteMax":["<integer>",blendRange[4]],"destBlackMin":["<integer>",blendRange[5]],"destBlackMax":["<integer>",blendRange[6]],"destWhiteMin":["<integer>",blendRange[7]],"destWhiteMax":["<integer>",blendRange[8]]}]];} blendRangeListArr.push(blendRangeObject);} return["<list>",blendRangeListArr];};jamHelpers.fromBlendRangeList=function(blendRangeList,explicit) {var blendRanges;if(explicit) {var replaceChannelHook=function(desc,key,getDefaultValue) {var replacedValue=undefined;if(key==="channel") {var value=getDefaultValue(desc,key);replacedValue=value[0]["channel"];} return replacedValue;};blendRanges=jamEngine.simplifyList(blendRangeList,replaceChannelHook);} else {blendRanges=[];var normalizedBlendRangeList=jamEngine.normalizeJsonItem(blendRangeList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedBlendRangeList[1].length;index++) {var blendRange=normalizedBlendRangeList[1][index][1][1];var blendRangeArr=[blendRange["channel"][1][0][1][1][1],blendRange["srcBlackMin"][1],blendRange["srcBlackMax"][1],blendRange["srcWhiteMin"][1],blendRange["srcWhiteMax"][1],blendRange["destBlackMin"][1],blendRange["destBlackMax"][1],blendRange["destWhiteMin"][1],blendRange["destWhiteMax"][1]];blendRanges.push(blendRangeArr);}} return blendRanges;};jamHelpers.toIntegerList=function(integersArr) {var integerListArr=[];for(var i=0;i<integersArr.length;i++) {integerListArr.push(["<integer>",integersArr[i]]);} return["<list>",integerListArr];};jamHelpers.fromIntegerList=function(integerList) {var normalizedIntegerList=jamEngine.normalizeJsonItem(integerList,{meaningfulIds:true,parseFriendly:true});var integersArr=[];var integers=normalizedIntegerList[1];for(var i=0;i<integers.length;i++) {integersArr.push(integers[i][1]);} return integersArr;};function toUnitDouble(value,unit) {return(typeof unit==='undefined')?["<double>",value]:["<unitDouble>",[unit,value]];} jamHelpers.toPointObject=function(pointArr) {var data=pointArr[0];var unit=pointArr[1];var pointObject=["<object>",["point",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return pointObject;};jamHelpers.toPointList=function(pointsArr) {var data=pointsArr[0];var unit=pointsArr[1];var pointListArr=[];for(var i=0;i<data.length;i++) {pointListArr.push (["<object>",["point",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",pointListArr];};jamHelpers.fromPointList=function(pointList) {var pointsArr=[];var normalizedPointList=jamEngine.normalizeJsonItem(pointList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pointListArr=normalizedPointList[1];for(var i=0;i<pointListArr.length;i++) {data.push([getValue(pointListArr[i][1][1]["horizontal"]),getValue(pointListArr[i][1][1]["vertical"])]);} pointsArr.push(data);if(unit) {pointsArr.push(unit);} return pointsArr;};jamHelpers.toOffsetObject=function(offsetArr) {var data=offsetArr[0];var unit=offsetArr[1];var offsetObject=["<object>",["offset",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return offsetObject;};jamHelpers.toRectangleObject=function(rectangleArr) {var data=rectangleArr[0];var unit=rectangleArr[1];var rectangleObj={"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)};if(data.length===5) {rectangleObj["radius"]=toUnitDouble(data[4],unit);} return["<object>",["rectangle",rectangleObj]];};jamHelpers.toEllipseObject=function(ellipseArr) {var data=ellipseArr[0];var unit=ellipseArr[1];var ellipseObject=["<object>",["ellipse",{"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)}]];return ellipseObject;};jamHelpers.toCustomShapeObject=function(customShapeArr) {var data=customShapeArr[0];var unit=customShapeArr[1];var customShapeObject=["<object>",["customShape",{"name":["<string>",data[0]],"left":toUnitDouble(data[1],unit),"top":toUnitDouble(data[2],unit),"right":toUnitDouble(data[3],unit),"bottom":toUnitDouble(data[4],unit)}]];return customShapeObject;};jamHelpers.toCurvePointList=function(curvePoints) {var curvePointListArr=[];var curvePointObject;for(var i=0;i<curvePoints.length;i++) {var curvePoint=curvePoints[i];if(curvePoint.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue;switch(key) {case"continuity":typedValue=["<boolean>",value];break;case"horizontal":case"vertical":typedValue=["<double>",value];break;case"curvePoint":typedValue=["<object>",["curvePoint",restoreDesc(value)]];break;default:typedValue=null;break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} curvePointObject=restoreDesc({"curvePoint":curvePoint})["curvePoint"];} else if(curvePoint.constructor===Array) {switch(curvePoint.length) {case 2:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]]}]];break;case 3:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]],"continuity":["<boolean>",curvePoint[2]]}]];break;}} curvePointListArr.push(curvePointObject);} return["<list>",curvePointListArr];};jamHelpers.fromCurvePointList=function(curvePointList,explicit) {var curvePoints;if(explicit) {curvePoints=jamEngine.simplifyList(curvePointList);} else {curvePoints=[];var normalizedCurvePointList=jamEngine.normalizeJsonItem(curvePointList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedCurvePointList[1].length;index++) {var curvePoint=normalizedCurvePointList[1][index][1][1];var curvePointArr=[curvePoint["horizontal"][1],curvePoint["vertical"][1]];if("continuity"in curvePoint) {curvePointArr.push(curvePoint["continuity"][1]);} curvePoints.push(curvePointArr);}} return curvePoints;};jamHelpers.toRationalPointList=function(rationalPointsArr) {var data=rationalPointsArr[0];var unit=rationalPointsArr[1];var rationalPointListArr=[];for(var i=0;i<data.length;i++) {rationalPointListArr.push (["<object>",["rationalPoint",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",rationalPointListArr];};jamHelpers.toPathComponentList=function(pathComponents) {var pathComponentList;if(pathComponents.constructor===Object) {var unit;if("unit"in pathComponents) {unit=pathComponents["unit"];} var data=pathComponents["pathComponents"];function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue;var restoredList;switch(key) {case"closedSubpath":case"smooth":case"windingFill":typedValue=["<boolean>",value];break;case"shapeOperation":typedValue=["<enumerated>",["shapeOperation",value]];break;case"horizontal":case"vertical":typedValue=toUnitDouble(value,unit);break;case"anchor":case"backward":case"forward":typedValue=["<object>",["point",restoreDesc(value)]];break;case"subpathListKey":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["subpathsList",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"points":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathPoint",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"pathComponents":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathComponent",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;default:typedValue=null;break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} pathComponentList=restoreDesc({"pathComponents":data})["pathComponents"];} else if(pathComponents.constructor===Array) {var pathComponentListArr=[];var data=pathComponents[0];var unit=pathComponents[1];for(var i=0;i<data.length;i++) {var shapeOperation=data[i][0];var subpaths=data[i][1];var windingFill=data[i][2];var subpathArr=[];for(var j=0;j<subpaths.length;j++) {var points=subpaths[j][0];var closedSubpath=subpaths[j][1];var pointArr=[];for(var k=0;k<points.length;k++) {var point=points[k];switch(point.length) {case 1:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]]}]]);break;case 3:case 4:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]],"forward":["<object>",["point",{"horizontal":toUnitDouble(point[1][0],unit),"vertical":toUnitDouble(point[1][1],unit)}]],"backward":["<object>",["point",{"horizontal":toUnitDouble(point[2][0],unit),"vertical":toUnitDouble(point[2][1],unit)}]],"smooth":["<boolean>",point[3]||false]}]]);break;}} var subpath={};if(closedSubpath) {subpath["closedSubpath"]=["<boolean>",closedSubpath];} subpath["points"]=["<list>",pointArr];subpathArr.push(["<object>",["subpathsList",subpath]]);} var pathComponent={};pathComponent["shapeOperation"]=["<enumerated>",["shapeOperation",shapeOperation]];if(windingFill) {pathComponent["windingFill"]=["<boolean>",windingFill];} pathComponent["subpathListKey"]=["<list>",subpathArr];pathComponentListArr.push(["<object>",["pathComponent",pathComponent]]);} pathComponentList=["<list>",pathComponentListArr];} return pathComponentList;};jamHelpers.fromPathComponentList=function(pathComponentList,explicit) {var pathComponents;if(explicit) {pathComponents={};var unit;var done=false;function getUnitHook(desc,key) {if(!done) {if(key==="horizontal") {var value=desc[key];if(value[0]==="<unitDouble>") {unit=value[1][0];} done=true;}} return undefined;} pathComponents["pathComponents"]=jamEngine.simplifyList(pathComponentList,getUnitHook);if(unit) {pathComponents["unit"]=unit;}} else {pathComponents=[];var normalizedPathComponentList=jamEngine.normalizeJsonItem(pathComponentList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pathComponentListArr=normalizedPathComponentList[1];for(var i=0;i<pathComponentListArr.length;i++) {var pathComponent=pathComponentListArr[i][1][1];var shapeOperation=pathComponent["shapeOperation"][1][1];var windingFill=("windingFill"in pathComponent)?pathComponent["windingFill"][1]:false;var subpathsArr=[];var subpathListArr=pathComponent["subpathListKey"][1];for(var j=0;j<subpathListArr.length;j++) {var subpathsList=subpathListArr[j][1][1];var closedSubpath=("closedSubpath"in subpathsList)?subpathsList["closedSubpath"][1]:false;var pathPointsArr=[];var pointsArr=subpathsList["points"][1];for(var k=0;k<pointsArr.length;k++) {var pathPoint=pointsArr[k][1][1];var pathPointArr=[];var anchor=pathPoint["anchor"][1][1];pathPointArr.push([getValue(anchor["horizontal"]),getValue(anchor["vertical"])]);if("forward"in pathPoint) {var forward=pathPoint["forward"][1][1];pathPointArr.push([getValue(forward["horizontal"]),getValue(forward["vertical"])]);} if("backward"in pathPoint) {var backward=pathPoint["backward"][1][1];pathPointArr.push([getValue(backward["horizontal"]),getValue(backward["vertical"])]);} var smooth=("smooth"in pathPoint)?pathPoint["smooth"][1]:false;if(smooth) {pathPointArr.push(smooth);} pathPointsArr.push(pathPointArr);} var subpathArr=[];subpathArr.push(pathPointsArr);if(closedSubpath) {subpathArr.push(closedSubpath);} subpathsArr.push(subpathArr);} var pathComponentArr=[];pathComponentArr.push(shapeOperation);pathComponentArr.push(subpathsArr);if(windingFill) {pathComponentArr.push(windingFill);} data.push(pathComponentArr);} pathComponents.push(data);if(unit) {pathComponents.push(unit);}} return pathComponents;};var namedColorsSets={"css":"w3c","svg":"w3c","w3c":{"colorClass":"RGBColor","colorNames":{"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":"darkgray","darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":"darkslategray","darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":"dimgray","dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":"gray","honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":"lightgray","lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":"lightslategray","lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":"slategray","snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]},"fallbackColor":"black","info":["http://www.w3.org/TR/css3-color/#svg-color","http://www.w3.org/TR/SVG/types.html#ColorKeywords","http://en.wikipedia.org/wiki/X11_color_names"]},"x11":{"colorClass":"RGBColor","colorNames":{"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"antiquewhite1":[255,239,219],"antiquewhite2":[238,223,204],"antiquewhite3":[205,192,176],"antiquewhite4":[139,131,120],"aquamarine":[127,255,212],"aquamarine1":[127,255,212],"aquamarine2":[118,238,198],"aquamarine3":[102,205,170],"aquamarine4":[69,139,116],"azure":[240,255,255],"azure1":[240,255,255],"azure2":[224,238,238],"azure3":[193,205,205],"azure4":[131,139,139],"beige":[245,245,220],"bisque":[255,228,196],"bisque1":[255,228,196],"bisque2":[238,213,183],"bisque3":[205,183,158],"bisque4":[139,125,107],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blue1":[0,0,255],"blue2":[0,0,238],"blue3":[0,0,205],"blue4":[0,0,139],"blueviolet":[138,43,226],"brown":[165,42,42],"brown1":[255,64,64],"brown2":[238,59,59],"brown3":[205,51,51],"brown4":[139,35,35],"burlywood":[222,184,135],"burlywood1":[255,211,155],"burlywood2":[238,197,145],"burlywood3":[205,170,125],"burlywood4":[139,115,85],"cadetblue":[95,158,160],"cadetblue1":[152,245,255],"cadetblue2":[142,229,238],"cadetblue3":[122,197,205],"cadetblue4":[83,134,139],"chartreuse":[127,255,0],"chartreuse1":[127,255,0],"chartreuse2":[118,238,0],"chartreuse3":[102,205,0],"chartreuse4":[69,139,0],"chocolate":[210,105,30],"chocolate1":[255,127,36],"chocolate2":[238,118,33],"chocolate3":[205,102,29],"chocolate4":[139,69,19],"coral":[255,127,80],"coral1":[255,114,86],"coral2":[238,106,80],"coral3":[205,91,69],"coral4":[139,62,47],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"cornsilk1":[255,248,220],"cornsilk2":[238,232,205],"cornsilk3":[205,200,177],"cornsilk4":[139,136,120],"cyan":[0,255,255],"cyan1":[0,255,255],"cyan2":[0,238,238],"cyan3":[0,205,205],"cyan4":[0,139,139],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgoldenrod1":[255,185,15],"darkgoldenrod2":[238,173,14],"darkgoldenrod3":[205,149,12],"darkgoldenrod4":[139,101,8],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":"darkgray","darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkolivegreen1":[202,255,112],"darkolivegreen2":[188,238,104],"darkolivegreen3":[162,205,90],"darkolivegreen4":[110,139,61],"darkorange":[255,140,0],"darkorange1":[255,127,0],"darkorange2":[238,118,0],"darkorange3":[205,102,0],"darkorange4":[139,69,0],"darkorchid":[153,50,204],"darkorchid1":[191,62,255],"darkorchid2":[178,58,238],"darkorchid3":[154,50,205],"darkorchid4":[104,34,139],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkseagreen1":[193,255,193],"darkseagreen2":[180,238,180],"darkseagreen3":[155,205,155],"darkseagreen4":[105,139,105],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategray1":[151,255,255],"darkslategray2":[141,238,238],"darkslategray3":[121,205,205],"darkslategray4":[82,139,139],"darkslategrey":"darkslategray","darkslategrey1":"darkslategray1","darkslategrey2":"darkslategray2","darkslategrey3":"darkslategray3","darkslategrey4":"darkslategray4","darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deeppink1":[255,20,147],"deeppink2":[238,18,137],"deeppink3":[205,16,118],"deeppink4":[139,10,80],"deepskyblue":[0,191,255],"deepskyblue1":[0,191,255],"deepskyblue2":[0,178,238],"deepskyblue3":[0,154,205],"deepskyblue4":[0,104,139],"dimgray":[105,105,105],"dimgrey":"dimgray","dodgerblue":[30,144,255],"dodgerblue1":[30,144,255],"dodgerblue2":[28,134,238],"dodgerblue3":[24,116,205],"dodgerblue4":[16,78,139],"firebrick":[178,34,34],"firebrick1":[255,48,48],"firebrick2":[238,44,44],"firebrick3":[205,38,38],"firebrick4":[139,26,26],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"gold1":[255,215,0],"gold2":[238,201,0],"gold3":[205,173,0],"gold4":[139,117,0],"goldenrod":[218,165,32],"goldenrod1":[255,193,37],"goldenrod2":[238,180,34],"goldenrod3":[205,155,29],"goldenrod4":[139,105,20],"gray":[190,190,190],"gray0":[0,0,0],"gray1":[3,3,3],"gray2":[5,5,5],"gray3":[8,8,8],"gray4":[10,10,10],"gray5":[13,13,13],"gray6":[15,15,15],"gray7":[18,18,18],"gray8":[20,20,20],"gray9":[23,23,23],"gray10":[26,26,26],"gray11":[28,28,28],"gray12":[31,31,31],"gray13":[33,33,33],"gray14":[36,36,36],"gray15":[38,38,38],"gray16":[41,41,41],"gray17":[43,43,43],"gray18":[46,46,46],"gray19":[48,48,48],"gray20":[51,51,51],"gray21":[54,54,54],"gray22":[56,56,56],"gray23":[59,59,59],"gray24":[61,61,61],"gray25":[64,64,64],"gray26":[66,66,66],"gray27":[69,69,69],"gray28":[71,71,71],"gray29":[74,74,74],"gray30":[77,77,77],"gray31":[79,79,79],"gray32":[82,82,82],"gray33":[84,84,84],"gray34":[87,87,87],"gray35":[89,89,89],"gray36":[92,92,92],"gray37":[94,94,94],"gray38":[97,97,97],"gray39":[99,99,99],"gray40":[102,102,102],"gray41":[105,105,105],"gray42":[107,107,107],"gray43":[110,110,110],"gray44":[112,112,112],"gray45":[115,115,115],"gray46":[117,117,117],"gray47":[120,120,120],"gray48":[122,122,122],"gray49":[125,125,125],"gray50":[127,127,127],"gray51":[130,130,130],"gray52":[133,133,133],"gray53":[135,135,135],"gray54":[138,138,138],"gray55":[140,140,140],"gray56":[143,143,143],"gray57":[145,145,145],"gray58":[148,148,148],"gray59":[150,150,150],"gray60":[153,153,153],"gray61":[156,156,156],"gray62":[158,158,158],"gray63":[161,161,161],"gray64":[163,163,163],"gray65":[166,166,166],"gray66":[168,168,168],"gray67":[171,171,171],"gray68":[173,173,173],"gray69":[176,176,176],"gray70":[179,179,179],"gray71":[181,181,181],"gray72":[184,184,184],"gray73":[186,186,186],"gray74":[189,189,189],"gray75":[191,191,191],"gray76":[194,194,194],"gray77":[196,196,196],"gray78":[199,199,199],"gray79":[201,201,201],"gray80":[204,204,204],"gray81":[207,207,207],"gray82":[209,209,209],"gray83":[212,212,212],"gray84":[214,214,214],"gray85":[217,217,217],"gray86":[219,219,219],"gray87":[222,222,222],"gray88":[224,224,224],"gray89":[227,227,227],"gray90":[229,229,229],"gray91":[232,232,232],"gray92":[235,235,235],"gray93":[237,237,237],"gray94":[240,240,240],"gray95":[242,242,242],"gray96":[245,245,245],"gray97":[247,247,247],"gray98":[250,250,250],"gray99":[252,252,252],"gray100":[255,255,255],"green":[0,255,0],"green1":[0,255,0],"green2":[0,238,0],"green3":[0,205,0],"green4":[0,139,0],"greenyellow":[173,255,47],"grey":"gray","grey0":"gray0","grey1":"gray1","grey2":"gray2","grey3":"gray3","grey4":"gray4","grey5":"gray5","grey6":"gray6","grey7":"gray7","grey8":"gray8","grey9":"gray9","grey10":"gray10","grey11":"gray11","grey12":"gray12","grey13":"gray13","grey14":"gray14","grey15":"gray15","grey16":"gray16","grey17":"gray17","grey18":"gray18","grey19":"gray19","grey20":"gray20","grey21":"gray21","grey22":"gray22","grey23":"gray23","grey24":"gray24","grey25":"gray25","grey26":"gray26","grey27":"gray27","grey28":"gray28","grey29":"gray29","grey30":"gray30","grey31":"gray31","grey32":"gray32","grey33":"gray33","grey34":"gray34","grey35":"gray35","grey36":"gray36","grey37":"gray37","grey38":"gray38","grey39":"gray39","grey40":"gray40","grey41":"gray41","grey42":"gray42","grey43":"gray43","grey44":"gray44","grey45":"gray45","grey46":"gray46","grey47":"gray47","grey48":"gray48","grey49":"gray49","grey50":"gray50","grey51":"gray51","grey52":"gray52","grey53":"gray53","grey54":"gray54","grey55":"gray55","grey56":"gray56","grey57":"gray57","grey58":"gray58","grey59":"gray59","grey60":"gray60","grey61":"gray61","grey62":"gray62","grey63":"gray63","grey64":"gray64","grey65":"gray65","grey66":"gray66","grey67":"gray67","grey68":"gray68","grey69":"gray69","grey70":"gray70","grey71":"gray71","grey72":"gray72","grey73":"gray73","grey74":"gray74","grey75":"gray75","grey76":"gray76","grey77":"gray77","grey78":"gray78","grey79":"gray79","grey80":"gray80","grey81":"gray81","grey82":"gray82","grey83":"gray83","grey84":"gray84","grey85":"gray85","grey86":"gray86","grey87":"gray87","grey88":"gray88","grey89":"gray89","grey90":"gray90","grey91":"gray91","grey92":"gray92","grey93":"gray93","grey94":"gray94","grey95":"gray95","grey96":"gray96","grey97":"gray97","grey98":"gray98","grey99":"gray99","grey100":"gray100","honeydew":[240,255,240],"honeydew1":[240,255,240],"honeydew2":[224,238,224],"honeydew3":[193,205,193],"honeydew4":[131,139,131],"hotpink":[255,105,180],"hotpink1":[255,110,180],"hotpink2":[238,106,167],"hotpink3":[205,96,144],"hotpink4":[139,58,98],"indianred":[205,92,92],"indianred1":[255,106,106],"indianred2":[238,99,99],"indianred3":[205,85,85],"indianred4":[139,58,58],"ivory":[255,255,240],"ivory1":[255,255,240],"ivory2":[238,238,224],"ivory3":[205,205,193],"ivory4":[139,139,131],"khaki":[240,230,140],"khaki1":[255,246,143],"khaki2":[238,230,133],"khaki3":[205,198,115],"khaki4":[139,134,78],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lavenderblush1":[255,240,245],"lavenderblush2":[238,224,229],"lavenderblush3":[205,193,197],"lavenderblush4":[139,131,134],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lemonchiffon1":[255,250,205],"lemonchiffon2":[238,233,191],"lemonchiffon3":[205,201,165],"lemonchiffon4":[139,137,112],"lightblue":[173,216,230],"lightblue1":[191,239,255],"lightblue2":[178,223,238],"lightblue3":[154,192,205],"lightblue4":[104,131,139],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightcyan1":[224,255,255],"lightcyan2":[209,238,238],"lightcyan3":[180,205,205],"lightcyan4":[122,139,139],"lightgoldenrod":[238,221,130],"lightgoldenrod1":[255,236,139],"lightgoldenrod2":[238,220,130],"lightgoldenrod3":[205,190,112],"lightgoldenrod4":[139,129,76],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":"lightgray","lightpink":[255,182,193],"lightpink1":[255,174,185],"lightpink2":[238,162,173],"lightpink3":[205,140,149],"lightpink4":[139,95,101],"lightsalmon":[255,160,122],"lightsalmon1":[255,160,122],"lightsalmon2":[238,149,114],"lightsalmon3":[205,129,98],"lightsalmon4":[139,87,66],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightskyblue1":[176,226,255],"lightskyblue2":[164,211,238],"lightskyblue3":[141,182,205],"lightskyblue4":[96,123,139],"lightslateblue":[132,112,255],"lightslategray":[119,136,153],"lightslategrey":"lightslategray","lightsteelblue":[176,196,222],"lightsteelblue1":[202,225,255],"lightsteelblue2":[188,210,238],"lightsteelblue3":[162,181,205],"lightsteelblue4":[110,123,139],"lightyellow":[255,255,224],"lightyellow1":[255,255,224],"lightyellow2":[238,238,209],"lightyellow3":[205,205,180],"lightyellow4":[139,139,122],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"magenta1":[255,0,255],"magenta2":[238,0,238],"magenta3":[205,0,205],"magenta4":[139,0,139],"maroon":[176,48,96],"maroon1":[255,52,179],"maroon2":[238,48,167],"maroon3":[205,41,144],"maroon4":[139,28,98],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumorchid1":[224,102,255],"mediumorchid2":[209,95,238],"mediumorchid3":[180,82,205],"mediumorchid4":[122,55,139],"mediumpurple":[147,112,219],"mediumpurple1":[171,130,255],"mediumpurple2":[159,121,238],"mediumpurple3":[137,104,205],"mediumpurple4":[93,71,139],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"mistyrose1":[255,228,225],"mistyrose2":[238,213,210],"mistyrose3":[205,183,181],"mistyrose4":[139,125,123],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navajowhite1":[255,222,173],"navajowhite2":[238,207,161],"navajowhite3":[205,179,139],"navajowhite4":[139,121,94],"navy":[0,0,128],"navyblue":"navy","oldlace":[253,245,230],"olivedrab":[107,142,35],"olivedrab1":[192,255,62],"olivedrab2":[179,238,58],"olivedrab3":[154,205,50],"olivedrab4":[105,139,34],"orange":[255,165,0],"orange1":[255,165,0],"orange2":[238,154,0],"orange3":[205,133,0],"orange4":[139,90,0],"orangered":[255,69,0],"orangered1":[255,69,0],"orangered2":[238,64,0],"orangered3":[205,55,0],"orangered4":[139,37,0],"orchid":[218,112,214],"orchid1":[255,131,250],"orchid2":[238,122,233],"orchid3":[205,105,201],"orchid4":[139,71,137],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"palegreen1":[154,255,154],"palegreen2":[144,238,144],"palegreen3":[124,205,124],"palegreen4":[84,139,84],"paleturquoise":[175,238,238],"paleturquoise1":[187,255,255],"paleturquoise2":[174,238,238],"paleturquoise3":[150,205,205],"paleturquoise4":[102,139,139],"palevioletred":[219,112,147],"palevioletred1":[255,130,171],"palevioletred2":[238,121,159],"palevioletred3":[205,104,137],"palevioletred4":[139,71,93],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peachpuff1":[255,218,185],"peachpuff2":[238,203,173],"peachpuff3":[205,175,149],"peachpuff4":[139,119,101],"peru":[205,133,63],"pink":[255,192,203],"pink1":[255,181,197],"pink2":[238,169,184],"pink3":[205,145,158],"pink4":[139,99,108],"plum":[221,160,221],"plum1":[255,187,255],"plum2":[238,174,238],"plum3":[205,150,205],"plum4":[139,102,139],"powderblue":[176,224,230],"purple":[160,32,240],"purple1":[155,48,255],"purple2":[145,44,238],"purple3":[125,38,205],"purple4":[85,26,139],"red":[255,0,0],"red1":[255,0,0],"red2":[238,0,0],"red3":[205,0,0],"red4":[139,0,0],"rosybrown":[188,143,143],"rosybrown1":[255,193,193],"rosybrown2":[238,180,180],"rosybrown3":[205,155,155],"rosybrown4":[139,105,105],"royalblue":[65,105,225],"royalblue1":[72,118,255],"royalblue2":[67,110,238],"royalblue3":[58,95,205],"royalblue4":[39,64,139],"saddlebrown":[139,69,19],"salmon":[250,128,114],"salmon1":[255,140,105],"salmon2":[238,130,98],"salmon3":[205,112,84],"salmon4":[139,76,57],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seagreen1":[84,255,159],"seagreen2":[78,238,148],"seagreen3":[67,205,128],"seagreen4":[46,139,87],"seashell":[255,245,238],"seashell1":[255,245,238],"seashell2":[238,229,222],"seashell3":[205,197,191],"seashell4":[139,134,130],"sienna":[160,82,45],"sienna1":[255,130,71],"sienna2":[238,121,66],"sienna3":[205,104,57],"sienna4":[139,71,38],"skyblue":[135,206,235],"skyblue1":[135,206,255],"skyblue2":[126,192,238],"skyblue3":[108,166,205],"skyblue4":[74,112,139],"slateblue":[106,90,205],"slateblue1":[131,111,255],"slateblue2":[122,103,238],"slateblue3":[105,89,205],"slateblue4":[71,60,139],"slategray":[112,128,144],"slategray1":[198,226,255],"slategray2":[185,211,238],"slategray3":[159,182,205],"slategray4":[108,123,139],"slategrey":"slategray","slategrey1":"slategray1","slategrey2":"slategray2","slategrey3":"slategray3","slategrey4":"slategray4","snow":[255,250,250],"snow1":[255,250,250],"snow2":[238,233,233],"snow3":[205,201,201],"snow4":[139,137,137],"springgreen":[0,255,127],"springgreen1":[0,255,127],"springgreen2":[0,238,118],"springgreen3":[0,205,102],"springgreen4":[0,139,69],"steelblue":[70,130,180],"steelblue1":[99,184,255],"steelblue2":[92,172,238],"steelblue3":[79,148,205],"steelblue4":[54,100,139],"tan":[210,180,140],"tan1":[255,165,79],"tan2":[238,154,73],"tan3":[205,133,63],"tan4":[139,90,43],"thistle":[216,191,216],"thistle1":[255,225,255],"thistle2":[238,210,238],"thistle3":[205,181,205],"thistle4":[139,123,139],"tomato":[255,99,71],"tomato1":[255,99,71],"tomato2":[238,92,66],"tomato3":[205,79,57],"tomato4":[139,54,38],"turquoise":[64,224,208],"turquoise1":[0,245,255],"turquoise2":[0,229,238],"turquoise3":[0,197,205],"turquoise4":[0,134,139],"violet":[238,130,238],"violetred":[208,32,144],"violetred1":[255,62,150],"violetred2":[238,58,140],"violetred3":[205,50,120],"violetred4":[139,34,82],"wheat":[245,222,179],"wheat1":[255,231,186],"wheat2":[238,216,174],"wheat3":[205,186,150],"wheat4":[139,126,102],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellow1":[255,255,0],"yellow2":[238,238,0],"yellow3":[205,205,0],"yellow4":[139,139,0],"yellowgreen":[154,205,50]},"fallbackColor":"white","info":["http://www.thomas-guettler.de/rgb.txt.html","http://www.astrouw.edu.pl/~jskowron/colors-x11/rgb.html","file://localhost/usr/X11/share/X11/rgb.txt"]}};jamHelpers.defineNamedColorsSet=function(setName,setData) {var setName=setName.replace(/\s/g,"").toLowerCase();if(setName in namedColorsSets) {throw new Error("\n[jamHelpers.defineNamedColorsSet] Named colors set already exists: "+setName);} else if(setData.constructor!==Object) {throw new Error("\n[jamHelpers.defineNamedColorsSet] JavaScript object expected");} else if(!(("colorClass"in setData)&&("colorNames"in setData))) {throw new Error("\n[jamHelpers.defineNamedColorsSet] Data syntax error");} else {namedColorsSets[setName]=setData;}};function getNamedColorsSet(setName) {var setName=setName.replace(/\s/g,"").toLowerCase();if(setName in namedColorsSets) {var namedColorsSet=namedColorsSets[setName];if(typeof namedColorsSet==='string') {namedColorsSet=namedColorsSets[namedColorsSet];}} else {throw new Error("\n[jamHelpers getNamedColorsSet] Unknown named colors set: "+setName);} return namedColorsSet;} jamHelpers.enumerateNamedColors=function(setName,excludeVariants) {var namedColorsSet=getNamedColorsSet(setName);var colorNames=namedColorsSet["colorNames"];var names=[];for(var colorName in colorNames) {if(colorNames.hasOwnProperty(colorName)) {if((!excludeVariants)||(typeof colorNames[colorName]!=='string')) {names.push(colorName);}}} return names;};function namedColor(setName,colorName) {var namedColorsSet=getNamedColorsSet(setName);var colorNames=namedColorsSet["colorNames"];var colorName=colorName.replace(/\s/g,"").toLowerCase();if(!(colorName in colorNames)) {if("fallbackColor"in namedColorsSet) {colorName=namedColorsSet["fallbackColor"];} else {throw new Error("\n[jamHelpers namedColor] Unknown color name: "+colorName);}} var colorComponents=colorNames[colorName];return[namedColorsSet["colorClass"],(typeof colorComponents==='string')?colorNames[colorComponents]:colorComponents];} jamHelpers.nameToColorObject=function(setName,colorName) {return this.toColorObject(namedColor(setName,colorName));};function hexToRGBColor(hexColorString) {var result=hexColorString.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);if(result) {var rgb=result[1];if(rgb.length===3) {rgb=rgb[0]+rgb[0]+rgb[1]+rgb[1]+rgb[2]+rgb[2];} var color=[parseInt(rgb.slice(0,2),16),parseInt(rgb.slice(2,4),16),parseInt(rgb.slice(4,6),16)];} else {throw new Error("\n[jamHelpers hexToRGBColor] Invalid HTML/CSS hexadecimal string: "+hexColorString);} return color;} jamHelpers.hexToColorObject=function(hexColorString) {return this.toColorObject(["RGBColor",hexToRGBColor(hexColorString)]);};function hexFromRGBColor(RGBColor,noSign,lowercase) {if((RGBColor.constructor===Array)&&(RGBColor.length===3)) {var red=Math.round(RGBColor[0]);var green=Math.round(RGBColor[1]);var blue=Math.round(RGBColor[2]);var hexaDigits=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];var hexColorString=(noSign)?"":"#";hexColorString+=hexaDigits[(red&0xF0)>>4]+hexaDigits[red&0x0F];hexColorString+=hexaDigits[(green&0xF0)>>4]+hexaDigits[green&0x0F];hexColorString+=hexaDigits[(blue&0xF0)>>4]+hexaDigits[blue&0x0F];if(lowercase) {hexColorString=hexColorString.toLowerCase();}} else {throw new Error("\n[jamHelpers hexFromRGBColor] Invalid RGB color array");} return hexColorString;} jamHelpers.hexFromColorObject=function(colorObject,noSign,lowercase) {var color=jamHelpers.fromColorObject(colorObject);return(color[0]==="RGBColor")?hexFromRGBColor(color[1],noSign,lowercase):null;};}());}
// jamJSON.jsxinc v3.6 (minified)
if(!this.jamJSON) {this.jamJSON={};(function() {var state;var stack;var container;var key;var value;var escapes={'\\':'\\','"':'"','/':'/','t':'\t','n':'\n','r':'\r','f':'\f','b':'\b'};var action={'{':{go:function() {stack.push({state:'ok'});container={};state='firstokey';},ovalue:function() {stack.push({container:container,state:'ocomma',key:key});container={};state='firstokey';},firstavalue:function() {stack.push({container:container,state:'acomma'});container={};state='firstokey';},avalue:function() {stack.push({container:container,state:'acomma'});container={};state='firstokey';}},'}':{firstokey:function() {var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},ocomma:function() {var pop=stack.pop();container[key]=value;value=container;container=pop.container;key=pop.key;state=pop.state;}},'[':{go:function() {stack.push({state:'ok'});container=[];state='firstavalue';},ovalue:function() {stack.push({container:container,state:'ocomma',key:key});container=[];state='firstavalue';},firstavalue:function() {stack.push({container:container,state:'acomma'});container=[];state='firstavalue';},avalue:function() {stack.push({container:container,state:'acomma'});container=[];state='firstavalue';}},']':{firstavalue:function() {var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},acomma:function() {var pop=stack.pop();container.push(value);value=container;container=pop.container;key=pop.key;state=pop.state;}},':':{colon:function() {if(container.hasOwnProperty(key)) {throw new SyntaxError('\n[jamJSON.parse] Duplicate key: "'+key+'"');} state='ovalue';}},',':{ocomma:function() {container[key]=value;state='okey';},acomma:function() {container.push(value);state='avalue';}},'true':{go:function() {value=true;state='ok';},ovalue:function() {value=true;state='ocomma';},firstavalue:function() {value=true;state='acomma';},avalue:function() {value=true;state='acomma';}},'false':{go:function() {value=false;state='ok';},ovalue:function() {value=false;state='ocomma';},firstavalue:function() {value=false;state='acomma';},avalue:function() {value=false;state='acomma';}},'null':{go:function() {value=null;state='ok';},ovalue:function() {value=null;state='ocomma';},firstavalue:function() {value=null;state='acomma';},avalue:function() {value=null;state='acomma';}}};var number={go:function() {state='ok';},ovalue:function() {state='ocomma';},firstavalue:function() {state='acomma';},avalue:function() {state='acomma';}};var string={go:function() {state='ok';},firstokey:function() {key=value;state='colon';},okey:function() {key=value;state='colon';},ovalue:function() {state='ocomma';},firstavalue:function() {state='acomma';},avalue:function() {state='acomma';}};var commentFunc=function(){};function debackslashify(text) {return text.replace(/\\(?:u(.{4})|([^u]))/g,function(a,b,c){return(b)?String.fromCharCode(parseInt(b,16)):escapes[c];});} jamJSON.parse=function(text,validate,allowComments) {if(validate) {var tx=/^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;var txc=/^[\x20\t\n\r]*(?:(\/(?:\/.*|\*(?:.|[\r\n])*?\*\/))|([,:\[\]{}]|true|false|null)|(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;var r;var i;var actionFunc;state='go';stack=[];try {while(true) {i=(allowComments)?1:0;r=(allowComments)?txc.exec(text):tx.exec(text);if(!r) {break;} if(allowComments&&r[1]) {actionFunc=commentFunc;} else if(r[i+1]) {actionFunc=action[r[i+1]][state];} else if(r[i+2]) {value=+r[i+2];actionFunc=number[state];} else {value=debackslashify(r[i+3]);actionFunc=string[state];} if(actionFunc) {actionFunc();text=text.slice(r[0].length);} else {break;}}} catch(e) {state=e;} if(state!=='ok'||/[^\x20\t\n\r]/.test(text)) {throw state instanceof SyntaxError?state:new SyntaxError('\n[jamJSON.parse] Invalid JSON');} return value;} else {return eval('('+text+')');}};var escapable=/[\\\"\x00-\x1F\x7F-\x9F\u00AD\u0600-\u0604\u070F\u17B4\u17B5\u200C-\u200F\u2028-\u202F\u2060-\u206F\uFEFF\uFFF0-\uFFFF]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};var gap;var indent;var prefixIndent;function quote(string) {escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return(typeof c==='string')?c:'\\u'+('0000'+a.charCodeAt(0).toString(16).toUpperCase()).slice(-4);})+'"':'"'+string+'"';} function str(value) {var i;var k;var v;var mind=gap;var partial;switch(typeof value) {case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value) {return'null';} gap+=indent;partial=[];if(value.constructor===Array) {for(i=0;i<value.length;i++) {partial[i]=str(value[i]);} v=(partial.length===0)?(gap?'[\n'+prefixIndent+mind+']':'[ ]'):(gap?'[\n'+prefixIndent+gap+partial.join(',\n'+prefixIndent+gap)+'\n'+prefixIndent+mind+']':'[ '+partial.join(', ')+' ]');gap=mind;return v;} else {for(k in value) {if(value.hasOwnProperty(k)) {v=str(value[k]);if(v) {partial.push(quote(k)+(gap&&((v.charAt(0)==='{')||(v.charAt(0)==='['))?':\n'+prefixIndent+gap:': ')+v);}}} v=(partial.length===0)?(gap?'{\n'+prefixIndent+mind+'}':'{ }'):(gap?'{\n'+prefixIndent+gap+partial.join(',\n'+prefixIndent+gap)+'\n'+prefixIndent+mind+'}':'{ '+partial.join(', ')+' }');gap=mind;return v;} default:throw new SyntaxError("\n[jamJSON.stringify] Invalid JSON");}} jamJSON.stringify=function(value,space,prefix) {var i;gap='';indent='';prefixIndent='';if(typeof space==='number') {for(i=0;i<space;i++) {indent+=' ';}} else if(typeof space==='string') {indent=space;} if(typeof prefix==='number') {for(i=0;i<prefix;i++) {prefixIndent+=' ';}} else if(typeof prefix==='string') {prefixIndent=prefix;} return prefixIndent+str(value);};}());}
// jamUtils.jsxinc v3.6 (minified)
if(!this.jamUtils) {this.jamUtils={};(function() {jamUtils.toDistanceUnit=function(amount,amountBasePerInch) {return(amount/amountBasePerInch)*72.0;};jamUtils.fromDistanceUnit=function(amount,amountBasePerInch) {return(amount/72.0)*amountBasePerInch;};jamUtils.fontExists=function(fontPostScriptName) {var useDOM=true;var found=false;if(useDOM) {for(var i=0;i<app.fonts.length;i++) {if(app.fonts[i].postScriptName===fontPostScriptName) {found=true;break;}}} else {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","fontList"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var fontPostScriptNameArr=resultDescriptorObj["fontList"][1][1]["fontPostScriptName"][1];for(var i=0;i<fontPostScriptNameArr.length;i++) {if(fontPostScriptNameArr[i][1]===fontPostScriptName) {found=true;break;}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;} return found;};jamUtils.loadAction=function(action,actionSet,actionsFilePath) {try {jamEngine.jsonGet([["action",["<name>",action]],["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadActionSet=function(actionSet,actionsFilePath) {try {jamEngine.jsonGet([["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadPreset=function(presetProperty,presetName,presetFilePath) {var useDOM=false;var useOpen=true;var classes={"brush":"brush","colors":"color","gradientClassEvent":"gradientClassEvent","style":"styleClass","pattern":"'PttR'","shapingCurve":"shapingCurve","customShape":"customShape","toolPreset":"toolPreset"};var presetClass=classes[presetProperty];var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var found=false;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","presetManager"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var presetManagerArr=resultDescriptorObj["presetManager"][1];for(var i=0;i<presetManagerArr.length;i++) {var presets=presetManagerArr[i][1];if(presets[0]===presetClass) {var presetsArr=presets[1]["name"][1];for(var j=0;j<presetsArr.length;j++) {if(presetsArr[j][1]===presetName) {found=true;break;}} break;}} if(!found) {if(useDOM) {app.load(new File(presetFilePath));} else if(useOpen) {jamEngine.jsonPlay("open",{"target":["<path>",presetFilePath]});} else {jamEngine.jsonPlay ("set",{"target":["<reference>",[["property",["<property>",presetProperty]],["application",["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<path>",presetFilePath],"append":["<boolean>",true]});}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;};function getFileObject(file) {var fileObject;if(file instanceof File) {fileObject=file;} else if(typeof file==='string') {fileObject=new File(file);} else {throw new Error('\n[jamUtils getFileObject] Invalid argument');} return fileObject;} jamUtils.readTextFile=function(textFile) {var text=null;var file=getFileObject(textFile);if(file.open("r")) {text=file.read();file.close();} return text;};jamUtils.readJsonFile=function(jsonFile) {return jamJSON.parse(this.readTextFile(jsonFile),true);};jamUtils.writeTextFile=function(textFile,text) {var file=getFileObject(textFile);if(file.open('w','TEXT')) {file.encoding='UTF-8';file.lineFeed='unix';file.write('\uFEFF');file.write(text);file.close();}};jamUtils.writeJsonFile=function(jsonFile,data,space) {this.writeTextFile(jsonFile,jamJSON.stringify(data,space));};jamUtils.cloneData=function(data) {var clone;if(data===null) {clone=data;} else if(data.constructor===Object) {clone={};for(var k in data) {if(data.hasOwnProperty(k)) {clone[k]=this.cloneData(data[k]);}}} else if(data.constructor===Array) {clone=[];for(var i=0;i<data.length;i++) {clone.push(this.cloneData(data[i]));}} else {clone=data;} return clone;};jamUtils.mergeData=function(data,defaultData) {for(var k in defaultData) {if(defaultData.hasOwnProperty(k)) {if(k in data) {if((defaultData[k]!==null)&&(defaultData[k].constructor===Object)) {data[k]=this.mergeData(data[k],defaultData[k]);}} else {data[k]=this.cloneData(defaultData[k]);}}} return data;};var jsonCustomOptionsStringKey="jsonCustomOptions";jamUtils.getCustomOptions=function(signature,defaultOptions) {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=false;try {var resultObj=jamEngine.classIdAndActionDescriptorToJson(jamEngine.uniIdStrToId(signature),app.getCustomOptions(signature));var customOptions=jamJSON.parse(resultObj["<descriptor>"][jsonCustomOptionsStringKey]["<string>"],true)} catch(e) {var customOptions={};} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return this.mergeData(customOptions,defaultOptions);};jamUtils.putCustomOptions=function(signature,customOptions,persistent) {var descriptorObj={};descriptorObj[jsonCustomOptionsStringKey]=["<string>",jamJSON.stringify(customOptions)];app.putCustomOptions(signature,jamEngine.jsonToActionDescriptor(descriptorObj),persistent);};jamUtils.eraseCustomOptions=function(signature) {app.eraseCustomOptions(signature);};jamUtils.dataToHexaString=function(dataString,lowercase) {var hexaDigits=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];var hexaString="";var length=dataString.length;for(var index=0;index<length;index++) {var dataByte=dataString.charCodeAt(index);if((dataByte>=0x00)&&(dataByte<=0xFF)) {hexaString+=hexaDigits[(dataByte&0xF0)>>4]+hexaDigits[dataByte&0x0F];} else {throw new Error("\n[jamUtils.dataToHexaString] Invalid data string");}} if(lowercase) {hexaString=hexaString.toLowerCase();} return hexaString;};jamUtils.hexaToDataString=function(hexaString) {var dataString="";var length=hexaString.length;if(((length%2)===0)&&(/^[0-9A-Fa-f]*$/.test(hexaString))) {for(var index=0;index<length;index+=2) {var byteString=hexaString.slice(index,index+2);dataString+=String.fromCharCode(parseInt(byteString,16));}} else {throw new Error("\n[jamUtils.hexaToDataString] Invalid hexa string");} return dataString;};}());}
// templates ninja
/*

 Copyright (C) 2011 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
    ;
// lib/handlebars/base.js

    Handlebars.VERSION = "1.0.0";
    Handlebars.COMPILER_REVISION = 4;

    Handlebars.REVISION_CHANGES = {
        1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '>= 1.0.0'
    };

    Handlebars.helpers  = {};
    Handlebars.partials = {};

    var toString = Object.prototype.toString,
        functionType = '[object Function]',
        objectType = '[object Object]';

    Handlebars.registerHelper = function(name, fn, inverse) {
        if (toString.call(name) === objectType) {
            if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
            Handlebars.Utils.extend(this.helpers, name);
        } else {
            if (inverse) { fn.not = inverse; }
            this.helpers[name] = fn;
        }
    };

    Handlebars.registerPartial = function(name, str) {
        if (toString.call(name) === objectType) {
            Handlebars.Utils.extend(this.partials,  name);
        } else {
            this.partials[name] = str;
        }
    };

    Handlebars.registerHelper('helperMissing', function(arg) {
        if(arguments.length === 2) {
            return undefined;
        } else {
            throw new Error("Missing helper: '" + arg + "'");
        }
    });

    Handlebars.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse || function() {}, fn = options.fn;

        var type = toString.call(context);

        if(type === functionType) { context = context.call(this); }

        if(context === true) {
            return fn(this);
        } else if(context === false || context == null) {
            return inverse(this);
        } else if(type === "[object Array]") {
            if(context.length > 0) {
                return Handlebars.helpers.each(context, options);
            } else {
                return inverse(this);
            }
        } else {
            return fn(context);
        }
    });

    Handlebars.K = function() {};

    Handlebars.createFrame = Object.create || function(object) {
        Handlebars.K.prototype = object;
        var obj = new Handlebars.K();
        Handlebars.K.prototype = null;
        return obj;
    };

    Handlebars.logger = {
        DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

        methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

        // can be overridden in the host environment
        log: function(level, obj) {
            if (Handlebars.logger.level <= level) {
                var method = Handlebars.logger.methodMap[level];
                if (typeof console !== 'undefined' && console[method]) {
                    console[method].call(console, obj);
                }
            }
        }
    };

    Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

    Handlebars.registerHelper('each', function(context, options) {
        var fn = options.fn, inverse = options.inverse;
        var i = 0, ret = "", data;

        var type = toString.call(context);
        if(type === functionType) { context = context.call(this); }

        if (options.data) {
            data = Handlebars.createFrame(options.data);
        }

        if(context && typeof context === 'object') {
            if(context instanceof Array){
                for(var j = context.length; i<j; i++) {
                    if (data) { data.index = i; }
                    ret = ret + fn(context[i], { data: data });
                }
            } else {
                for(var key in context) {
                    if(context.hasOwnProperty(key)) {
                        if(data) { data.key = key; }
                        ret = ret + fn(context[key], {data: data});
                        i++;
                    }
                }
            }
        }

        if(i === 0){
            ret = inverse(this);
        }

        return ret;
    });

    Handlebars.registerHelper('if', function(conditional, options) {
        var type = toString.call(conditional);
        if(type === functionType) { conditional = conditional.call(this); }

        if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
            return options.inverse(this);
        } else {
            return options.fn(this);
        }
    });

    Handlebars.registerHelper('unless', function(conditional, options) {
        return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
    });

    Handlebars.registerHelper('with', function(context, options) {
        var type = toString.call(context);
        if(type === functionType) { context = context.call(this); }

        if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
    });

    Handlebars.registerHelper('log', function(context, options) {
        var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
        Handlebars.log(level, context);
    });
    ;
// lib/handlebars/compiler/parser.js
    /* Jison generated parser */
    var handlebars = (function(){
        var parser = {trace: function trace() { },
            yy: {},
            symbols_: {"error":2,"root":3,"program":4,"EOF":5,"simpleInverse":6,"statements":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"params":27,"hash":28,"dataName":29,"param":30,"STRING":31,"INTEGER":32,"BOOLEAN":33,"hashSegments":34,"hashSegment":35,"ID":36,"EQUALS":37,"DATA":38,"pathSegments":39,"SEP":40,"$accept":0,"$end":1},
            terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},
            productions_: [0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],
            performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

                var $0 = $$.length - 1;
                switch (yystate) {
                    case 1: return $$[$0-1];
                        break;
                    case 2: this.$ = new yy.ProgramNode([], $$[$0]);
                        break;
                    case 3: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]);
                        break;
                    case 4: this.$ = new yy.ProgramNode($$[$0-1], []);
                        break;
                    case 5: this.$ = new yy.ProgramNode($$[$0]);
                        break;
                    case 6: this.$ = new yy.ProgramNode([], []);
                        break;
                    case 7: this.$ = new yy.ProgramNode([]);
                        break;
                    case 8: this.$ = [$$[$0]];
                        break;
                    case 9: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 10: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]);
                        break;
                    case 11: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]);
                        break;
                    case 12: this.$ = $$[$0];
                        break;
                    case 13: this.$ = $$[$0];
                        break;
                    case 14: this.$ = new yy.ContentNode($$[$0]);
                        break;
                    case 15: this.$ = new yy.CommentNode($$[$0]);
                        break;
                    case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]);
                        break;
                    case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]);
                        break;
                    case 18: this.$ = $$[$0-1];
                        break;
                    case 19:
                        // Parsing out the '&' escape token at this level saves ~500 bytes after min due to the removal of one parser node.
                        this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2][2] === '&');

                        break;
                    case 20: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true);
                        break;
                    case 21: this.$ = new yy.PartialNode($$[$0-1]);
                        break;
                    case 22: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]);
                        break;
                    case 23:
                        break;
                    case 24: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]];
                        break;
                    case 25: this.$ = [[$$[$0-1]].concat($$[$0]), null];
                        break;
                    case 26: this.$ = [[$$[$0-1]], $$[$0]];
                        break;
                    case 27: this.$ = [[$$[$0]], null];
                        break;
                    case 28: this.$ = [[$$[$0]], null];
                        break;
                    case 29: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 30: this.$ = [$$[$0]];
                        break;
                    case 31: this.$ = $$[$0];
                        break;
                    case 32: this.$ = new yy.StringNode($$[$0]);
                        break;
                    case 33: this.$ = new yy.IntegerNode($$[$0]);
                        break;
                    case 34: this.$ = new yy.BooleanNode($$[$0]);
                        break;
                    case 35: this.$ = $$[$0];
                        break;
                    case 36: this.$ = new yy.HashNode($$[$0]);
                        break;
                    case 37: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 38: this.$ = [$$[$0]];
                        break;
                    case 39: this.$ = [$$[$0-2], $$[$0]];
                        break;
                    case 40: this.$ = [$$[$0-2], new yy.StringNode($$[$0])];
                        break;
                    case 41: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])];
                        break;
                    case 42: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])];
                        break;
                    case 43: this.$ = [$$[$0-2], $$[$0]];
                        break;
                    case 44: this.$ = new yy.PartialNameNode($$[$0]);
                        break;
                    case 45: this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0]));
                        break;
                    case 46: this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0]));
                        break;
                    case 47: this.$ = new yy.DataNode($$[$0]);
                        break;
                    case 48: this.$ = new yy.IdNode($$[$0]);
                        break;
                    case 49: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2];
                        break;
                    case 50: this.$ = [{part: $$[$0]}];
                        break;
                }
            },
            table: [{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],
            defaultActions: {17:[2,1]},
            parseError: function parseError(str, hash) {
                throw new Error(str);
            },
            parse: function parse(input) {
                var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                this.lexer.setInput(input);
                this.lexer.yy = this.yy;
                this.yy.lexer = this.lexer;
                this.yy.parser = this;
                if (typeof this.lexer.yylloc == "undefined")
                    this.lexer.yylloc = {};
                var yyloc = this.lexer.yylloc;
                lstack.push(yyloc);
                var ranges = this.lexer.options && this.lexer.options.ranges;
                if (typeof this.yy.parseError === "function")
                    this.parseError = this.yy.parseError;
                function popStack(n) {
                    stack.length = stack.length - 2 * n;
                    vstack.length = vstack.length - n;
                    lstack.length = lstack.length - n;
                }
                function lex() {
                    var token;
                    token = self.lexer.lex() || 1;
                    if (typeof token !== "number") {
                        token = self.symbols_[token] || token;
                    }
                    return token;
                }
                var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                while (true) {
                    state = stack[stack.length - 1];
                    if (this.defaultActions[state]) {
                        action = this.defaultActions[state];
                    } else {
                        if (symbol === null || typeof symbol == "undefined") {
                            symbol = lex();
                        }
                        action = table[state] && table[state][symbol];
                    }
                    if (typeof action === "undefined" || !action.length || !action[0]) {
                        var errStr = "";
                        if (!recovering) {
                            expected = [];
                            for (p in table[state])
                                if (this.terminals_[p] && p > 2) {
                                    expected.push("'" + this.terminals_[p] + "'");
                                }
                            if (this.lexer.showPosition) {
                                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                            } else {
                                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                            }
                            this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                        }
                    }
                    if (action[0] instanceof Array && action.length > 1) {
                        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                    }
                    switch (action[0]) {
                        case 1:
                            stack.push(symbol);
                            vstack.push(this.lexer.yytext);
                            lstack.push(this.lexer.yylloc);
                            stack.push(action[1]);
                            symbol = null;
                            if (!preErrorSymbol) {
                                yyleng = this.lexer.yyleng;
                                yytext = this.lexer.yytext;
                                yylineno = this.lexer.yylineno;
                                yyloc = this.lexer.yylloc;
                                if (recovering > 0)
                                    recovering--;
                            } else {
                                symbol = preErrorSymbol;
                                preErrorSymbol = null;
                            }
                            break;
                        case 2:
                            len = this.productions_[action[1]][1];
                            yyval.$ = vstack[vstack.length - len];
                            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
                            if (ranges) {
                                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                            }
                            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                            if (typeof r !== "undefined") {
                                return r;
                            }
                            if (len) {
                                stack = stack.slice(0, -1 * len * 2);
                                vstack = vstack.slice(0, -1 * len);
                                lstack = lstack.slice(0, -1 * len);
                            }
                            stack.push(this.productions_[action[1]][0]);
                            vstack.push(yyval.$);
                            lstack.push(yyval._$);
                            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                            stack.push(newState);
                            break;
                        case 3:
                            return true;
                    }
                }
                return true;
            }
        };
        /* Jison generated lexer */
        var lexer = (function(){
            var lexer = ({EOF:1,
                parseError:function parseError(str, hash) {
                    if (this.yy.parser) {
                        this.yy.parser.parseError(str, hash);
                    } else {
                        throw new Error(str);
                    }
                },
                setInput:function (input) {
                    this._input = input;
                    this._more = this._less = this.done = false;
                    this.yylineno = this.yyleng = 0;
                    this.yytext = this.matched = this.match = '';
                    this.conditionStack = ['INITIAL'];
                    this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
                    if (this.options.ranges) this.yylloc.range = [0,0];
                    this.offset = 0;
                    return this;
                },
                input:function () {
                    var ch = this._input[0];
                    this.yytext += ch;
                    this.yyleng++;
                    this.offset++;
                    this.match += ch;
                    this.matched += ch;
                    var lines = ch.match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno++;
                        this.yylloc.last_line++;
                    } else {
                        this.yylloc.last_column++;
                    }
                    if (this.options.ranges) this.yylloc.range[1]++;

                    this._input = this._input.slice(1);
                    return ch;
                },
                unput:function (ch) {
                    var len = ch.length;
                    var lines = ch.split(/(?:\r\n?|\n)/g);

                    this._input = ch + this._input;
                    this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
                    //this.yyleng -= len;
                    this.offset -= len;
                    var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length-1);
                    this.matched = this.matched.substr(0, this.matched.length-1);

                    if (lines.length-1) this.yylineno -= lines.length-1;
                    var r = this.yylloc.range;

                    this.yylloc = {first_line: this.yylloc.first_line,
                        last_line: this.yylineno+1,
                        first_column: this.yylloc.first_column,
                        last_column: lines ?
                            (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                            this.yylloc.first_column - len
                    };

                    if (this.options.ranges) {
                        this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                    }
                    return this;
                },
                more:function () {
                    this._more = true;
                    return this;
                },
                less:function (n) {
                    this.unput(this.match.slice(n));
                },
                pastInput:function () {
                    var past = this.matched.substr(0, this.matched.length - this.match.length);
                    return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
                },
                upcomingInput:function () {
                    var next = this.match;
                    if (next.length < 20) {
                        next += this._input.substr(0, 20-next.length);
                    }
                    return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
                },
                showPosition:function () {
                    var pre = this.pastInput();
                    var c = new Array(pre.length + 1).join("-");
                    return pre + this.upcomingInput() + "\n" + c+"^";
                },
                next:function () {
                    if (this.done) {
                        return this.EOF;
                    }
                    if (!this._input) this.done = true;

                    var token,
                        match,
                        tempMatch,
                        index,
                        col,
                        lines;
                    if (!this._more) {
                        this.yytext = '';
                        this.match = '';
                    }
                    var rules = this._currentRules();
                    for (var i=0;i < rules.length; i++) {
                        tempMatch = this._input.match(this.rules[rules[i]]);
                        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                            match = tempMatch;
                            index = i;
                            if (!this.options.flex) break;
                        }
                    }
                    if (match) {
                        lines = match[0].match(/(?:\r\n?|\n).*/g);
                        if (lines) this.yylineno += lines.length;
                        this.yylloc = {first_line: this.yylloc.last_line,
                            last_line: this.yylineno+1,
                            first_column: this.yylloc.last_column,
                            last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
                        this.yytext += match[0];
                        this.match += match[0];
                        this.matches = match;
                        this.yyleng = this.yytext.length;
                        if (this.options.ranges) {
                            this.yylloc.range = [this.offset, this.offset += this.yyleng];
                        }
                        this._more = false;
                        this._input = this._input.slice(match[0].length);
                        this.matched += match[0];
                        token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
                        if (this.done && this._input) this.done = false;
                        if (token) return token;
                        else return;
                    }
                    if (this._input === "") {
                        return this.EOF;
                    } else {
                        return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                            {text: "", token: null, line: this.yylineno});
                    }
                },
                lex:function lex() {
                    var r = this.next();
                    if (typeof r !== 'undefined') {
                        return r;
                    } else {
                        return this.lex();
                    }
                },
                begin:function begin(condition) {
                    this.conditionStack.push(condition);
                },
                popState:function popState() {
                    return this.conditionStack.pop();
                },
                _currentRules:function _currentRules() {
                    return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
                },
                topState:function () {
                    return this.conditionStack[this.conditionStack.length-2];
                },
                pushState:function begin(condition) {
                    this.begin(condition);
                }});
            lexer.options = {};
            lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

                var YYSTATE=YY_START
                switch($avoiding_name_collisions) {
                    case 0: yy_.yytext = "\\"; return 14;
                        break;
                    case 1:
                        if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                        if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                        if(yy_.yytext) return 14;

                        break;
                    case 2: return 14;
                        break;
                    case 3:
                        if(yy_.yytext.slice(-1) !== "\\") this.popState();
                        if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                        return 14;

                        break;
                    case 4: yy_.yytext = yy_.yytext.substr(0, yy_.yyleng-4); this.popState(); return 15;
                        break;
                    case 5: return 25;
                        break;
                    case 6: return 16;
                        break;
                    case 7: return 20;
                        break;
                    case 8: return 19;
                        break;
                    case 9: return 19;
                        break;
                    case 10: return 23;
                        break;
                    case 11: return 22;
                        break;
                    case 12: this.popState(); this.begin('com');
                        break;
                    case 13: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15;
                        break;
                    case 14: return 22;
                        break;
                    case 15: return 37;
                        break;
                    case 16: return 36;
                        break;
                    case 17: return 36;
                        break;
                    case 18: return 40;
                        break;
                    case 19: /*ignore whitespace*/
                        break;
                    case 20: this.popState(); return 24;
                        break;
                    case 21: this.popState(); return 18;
                        break;
                    case 22: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 31;
                        break;
                    case 23: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\'/g,"'"); return 31;
                        break;
                    case 24: return 38;
                        break;
                    case 25: return 33;
                        break;
                    case 26: return 33;
                        break;
                    case 27: return 32;
                        break;
                    case 28: return 36;
                        break;
                    case 29: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 36;
                        break;
                    case 30: return 'INVALID';
                        break;
                    case 31: return 5;
                        break;
                }
            };
            lexer.rules = [/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
            lexer.conditions = {"mu":{"rules":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":false},"emu":{"rules":[3],"inclusive":false},"com":{"rules":[4],"inclusive":false},"INITIAL":{"rules":[0,1,2,31],"inclusive":true}};
            return lexer;})()
        parser.lexer = lexer;
        function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
        return new Parser;
    })();;
// lib/handlebars/compiler/base.js

    Handlebars.Parser = handlebars;

    Handlebars.parse = function(input) {

        // Just return if an already-compile AST was passed in.
        if(input.constructor === Handlebars.AST.ProgramNode) { return input; }

        Handlebars.Parser.yy = Handlebars.AST;
        return Handlebars.Parser.parse(input);
    };
    ;
// lib/handlebars/compiler/ast.js
    Handlebars.AST = {};

    Handlebars.AST.ProgramNode = function(statements, inverse) {
        this.type = "program";
        this.statements = statements;
        if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
    };

    Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
        this.type = "mustache";
        this.escaped = !unescaped;
        this.hash = hash;

        var id = this.id = rawParams[0];
        var params = this.params = rawParams.slice(1);

        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var eligibleHelper = this.eligibleHelper = id.isSimple;

        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        this.isHelper = eligibleHelper && (params.length || hash);

        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
    };

    Handlebars.AST.PartialNode = function(partialName, context) {
        this.type         = "partial";
        this.partialName  = partialName;
        this.context      = context;
    };

    Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
        var verifyMatch = function(open, close) {
            if(open.original !== close.original) {
                throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
            }
        };

        verifyMatch(mustache.id, close);
        this.type = "block";
        this.mustache = mustache;
        this.program  = program;
        this.inverse  = inverse;

        if (this.inverse && !this.program) {
            this.isInverse = true;
        }
    };

    Handlebars.AST.ContentNode = function(string) {
        this.type = "content";
        this.string = string;
    };

    Handlebars.AST.HashNode = function(pairs) {
        this.type = "hash";
        this.pairs = pairs;
    };

    Handlebars.AST.IdNode = function(parts) {
        this.type = "ID";

        var original = "",
            dig = [],
            depth = 0;

        for(var i=0,l=parts.length; i<l; i++) {
            var part = parts[i].part;
            original += (parts[i].separator || '') + part;

            if (part === ".." || part === "." || part === "this") {
                if (dig.length > 0) { throw new Handlebars.Exception("Invalid path: " + original); }
                else if (part === "..") { depth++; }
                else { this.isScoped = true; }
            }
            else { dig.push(part); }
        }

        this.original = original;
        this.parts    = dig;
        this.string   = dig.join('.');
        this.depth    = depth;

        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

        this.stringModeValue = this.string;
    };

    Handlebars.AST.PartialNameNode = function(name) {
        this.type = "PARTIAL_NAME";
        this.name = name.original;
    };

    Handlebars.AST.DataNode = function(id) {
        this.type = "DATA";
        this.id = id;
    };

    Handlebars.AST.StringNode = function(string) {
        this.type = "STRING";
        this.original =
            this.string =
                this.stringModeValue = string;
    };

    Handlebars.AST.IntegerNode = function(integer) {
        this.type = "INTEGER";
        this.original =
            this.integer = integer;
        this.stringModeValue = Number(integer);
    };

    Handlebars.AST.BooleanNode = function(bool) {
        this.type = "BOOLEAN";
        this.bool = bool;
        this.stringModeValue = bool === "true";
    };

    Handlebars.AST.CommentNode = function(comment) {
        this.type = "comment";
        this.comment = comment;
    };
    ;
// lib/handlebars/utils.js

    var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

    Handlebars.Exception = function(message) {
        var tmp = Error.prototype.constructor.apply(this, arguments);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
        }
    };
    Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
    Handlebars.SafeString = function(string) {
        this.string = string;
    };
    Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString();
    };

    var escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };

    var badChars = /[&<>"'`]/g;
    var possible = /[&<>"'`]/;

    var escapeChar = function(chr) {
        return escape[chr] || "&amp;";
    };

    Handlebars.Utils = {
        extend: function(obj, value) {
            for(var key in value) {
                if(value.hasOwnProperty(key)) {
                    obj[key] = value[key];
                }
            }
        },

        escapeExpression: function(string) {
            // don't escape SafeStrings, since they're already safe
            if (string instanceof Handlebars.SafeString) {
                return string.toString();
            } else if (string == null || string === false) {
                return "";
            }

            // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
            string = string.toString();

            if(!possible.test(string)) { return string; }
            return string.replace(badChars, escapeChar);
        },

        isEmpty: function(value) {
            if (!value && value !== 0) {
                return true;
            } else if(toString.call(value) === "[object Array]" && value.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    };
    ;
// lib/handlebars/compiler/compiler.js

    /*jshint eqnull:true*/
    var Compiler = Handlebars.Compiler = function() {};
    var JavaScriptCompiler = Handlebars.JavaScriptCompiler = function() {};

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

    Compiler.prototype = {
        compiler: Compiler,

        disassemble: function() {
            var opcodes = this.opcodes, opcode, out = [], params, param;

            for (var i=0, l=opcodes.length; i<l; i++) {
                opcode = opcodes[i];

                if (opcode.opcode === 'DECLARE') {
                    out.push("DECLARE " + opcode.name + "=" + opcode.value);
                } else {
                    params = [];
                    for (var j=0; j<opcode.args.length; j++) {
                        param = opcode.args[j];
                        if (typeof param === "string") {
                            param = "\"" + param.replace("\n", "\\n") + "\"";
                        }
                        params.push(param);
                    }
                    out.push(opcode.opcode + " " + params.join(" "));
                }
            }

            return out.join("\n");
        },
        equals: function(other) {
            var len = this.opcodes.length;
            if (other.opcodes.length !== len) {
                return false;
            }

            for (var i = 0; i < len; i++) {
                var opcode = this.opcodes[i],
                    otherOpcode = other.opcodes[i];
                if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
                    return false;
                }
                for (var j = 0; j < opcode.args.length; j++) {
                    if (opcode.args[j] !== otherOpcode.args[j]) {
                        return false;
                    }
                }
            }

            len = this.children.length;
            if (other.children.length !== len) {
                return false;
            }
            for (i = 0; i < len; i++) {
                if (!this.children[i].equals(other.children[i])) {
                    return false;
                }
            }

            return true;
        },

        guid: 0,

        compile: function(program, options) {
            this.children = [];
            this.depths = {list: []};
            this.options = options;

            // These changes will propagate to the other compiler components
            var knownHelpers = this.options.knownHelpers;
            this.options.knownHelpers = {
                'helperMissing': true,
                'blockHelperMissing': true,
                'each': true,
                'if': true,
                'unless': true,
                'with': true,
                'log': true
            };
            if (knownHelpers) {
                for (var name in knownHelpers) {
                    this.options.knownHelpers[name] = knownHelpers[name];
                }
            }

            return this.program(program);
        },

        accept: function(node) {
            return this[node.type](node);
        },

        program: function(program) {
            var statements = program.statements, statement;
            this.opcodes = [];

            for(var i=0, l=statements.length; i<l; i++) {
                statement = statements[i];
                this[statement.type](statement);
            }
            this.isSimple = l === 1;

            this.depths.list = this.depths.list.sort(function(a, b) {
                return a - b;
            });

            return this;
        },

        compileProgram: function(program) {
            var result = new this.compiler().compile(program, this.options);
            var guid = this.guid++, depth;

            this.usePartial = this.usePartial || result.usePartial;

            this.children[guid] = result;

            for(var i=0, l=result.depths.list.length; i<l; i++) {
                depth = result.depths.list[i];

                if(depth < 2) { continue; }
                else { this.addDepth(depth - 1); }
            }

            return guid;
        },

        block: function(block) {
            var mustache = block.mustache,
                program = block.program,
                inverse = block.inverse;

            if (program) {
                program = this.compileProgram(program);
            }

            if (inverse) {
                inverse = this.compileProgram(inverse);
            }

            var type = this.classifyMustache(mustache);

            if (type === "helper") {
                this.helperMustache(mustache, program, inverse);
            } else if (type === "simple") {
                this.simpleMustache(mustache);

                // now that the simple mustache is resolved, we need to
                // evaluate it by executing `blockHelperMissing`
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                this.opcode('emptyHash');
                this.opcode('blockValue');
            } else {
                this.ambiguousMustache(mustache, program, inverse);

                // now that the simple mustache is resolved, we need to
                // evaluate it by executing `blockHelperMissing`
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                this.opcode('emptyHash');
                this.opcode('ambiguousBlockValue');
            }

            this.opcode('append');
        },

        hash: function(hash) {
            var pairs = hash.pairs, pair, val;

            this.opcode('pushHash');

            for(var i=0, l=pairs.length; i<l; i++) {
                pair = pairs[i];
                val  = pair[1];

                if (this.options.stringParams) {
                    if(val.depth) {
                        this.addDepth(val.depth);
                    }
                    this.opcode('getContext', val.depth || 0);
                    this.opcode('pushStringParam', val.stringModeValue, val.type);
                } else {
                    this.accept(val);
                }

                this.opcode('assignToHash', pair[0]);
            }
            this.opcode('popHash');
        },

        partial: function(partial) {
            var partialName = partial.partialName;
            this.usePartial = true;

            if(partial.context) {
                this.ID(partial.context);
            } else {
                this.opcode('push', 'depth0');
            }

            this.opcode('invokePartial', partialName.name);
            this.opcode('append');
        },

        content: function(content) {
            this.opcode('appendContent', content.string);
        },

        mustache: function(mustache) {
            var options = this.options;
            var type = this.classifyMustache(mustache);

            if (type === "simple") {
                this.simpleMustache(mustache);
            } else if (type === "helper") {
                this.helperMustache(mustache);
            } else {
                this.ambiguousMustache(mustache);
            }

            if(mustache.escaped && !options.noEscape) {
                this.opcode('appendEscaped');
            } else {
                this.opcode('append');
            }
        },

        ambiguousMustache: function(mustache, program, inverse) {
            var id = mustache.id,
                name = id.parts[0],
                isBlock = program != null || inverse != null;

            this.opcode('getContext', id.depth);

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);

            this.opcode('invokeAmbiguous', name, isBlock);
        },

        simpleMustache: function(mustache) {
            var id = mustache.id;

            if (id.type === 'DATA') {
                this.DATA(id);
            } else if (id.parts.length) {
                this.ID(id);
            } else {
                // Simplified ID for `this`
                this.addDepth(id.depth);
                this.opcode('getContext', id.depth);
                this.opcode('pushContext');
            }

            this.opcode('resolvePossibleLambda');
        },

        helperMustache: function(mustache, program, inverse) {
            var params = this.setupFullMustacheParams(mustache, program, inverse),
                name = mustache.id.parts[0];

            if (this.options.knownHelpers[name]) {
                this.opcode('invokeKnownHelper', params.length, name);
            } else if (this.options.knownHelpersOnly) {
                throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
            } else {
                this.opcode('invokeHelper', params.length, name);
            }
        },

        ID: function(id) {
            this.addDepth(id.depth);
            this.opcode('getContext', id.depth);

            var name = id.parts[0];
            if (!name) {
                this.opcode('pushContext');
            } else {
                this.opcode('lookupOnContext', id.parts[0]);
            }

            for(var i=1, l=id.parts.length; i<l; i++) {
                this.opcode('lookup', id.parts[i]);
            }
        },

        DATA: function(data) {
            this.options.data = true;
            if (data.id.isScoped || data.id.depth) {
                throw new Handlebars.Exception('Scoped data references are not supported: ' + data.original);
            }

            this.opcode('lookupData');
            var parts = data.id.parts;
            for(var i=0, l=parts.length; i<l; i++) {
                this.opcode('lookup', parts[i]);
            }
        },

        STRING: function(string) {
            this.opcode('pushString', string.string);
        },

        INTEGER: function(integer) {
            this.opcode('pushLiteral', integer.integer);
        },

        BOOLEAN: function(bool) {
            this.opcode('pushLiteral', bool.bool);
        },

        comment: function() {},

        // HELPERS
        opcode: function(name) {
            this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
        },

        declare: function(name, value) {
            this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
        },

        addDepth: function(depth) {
            if(isNaN(depth)) { throw new Error("EWOT"); }
            if(depth === 0) { return; }

            if(!this.depths[depth]) {
                this.depths[depth] = true;
                this.depths.list.push(depth);
            }
        },

        classifyMustache: function(mustache) {
            var isHelper   = mustache.isHelper;
            var isEligible = mustache.eligibleHelper;
            var options    = this.options;

            // if ambiguous, we can possibly resolve the ambiguity now
            if (isEligible && !isHelper) {
                var name = mustache.id.parts[0];

                if (options.knownHelpers[name]) {
                    isHelper = true;
                } else if (options.knownHelpersOnly) {
                    isEligible = false;
                }
            }

            if (isHelper) { return "helper"; }
            else if (isEligible) { return "ambiguous"; }
            else { return "simple"; }
        },

        pushParams: function(params) {
            var i = params.length, param;

            while(i--) {
                param = params[i];

                if(this.options.stringParams) {
                    if(param.depth) {
                        this.addDepth(param.depth);
                    }

                    this.opcode('getContext', param.depth || 0);
                    this.opcode('pushStringParam', param.stringModeValue, param.type);
                } else {
                    this[param.type](param);
                }
            }
        },

        setupMustacheParams: function(mustache) {
            var params = mustache.params;
            this.pushParams(params);

            if(mustache.hash) {
                this.hash(mustache.hash);
            } else {
                this.opcode('emptyHash');
            }

            return params;
        },

        // this will replace setupMustacheParams when we're done
        setupFullMustacheParams: function(mustache, program, inverse) {
            var params = mustache.params;
            this.pushParams(params);

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);

            if(mustache.hash) {
                this.hash(mustache.hash);
            } else {
                this.opcode('emptyHash');
            }

            return params;
        }
    };

    var Literal = function(value) {
        this.value = value;
    };

    JavaScriptCompiler.prototype = {
        // PUBLIC API: You can override these methods in a subclass to provide
        // alternative compiled forms for name lookup and buffering semantics
        nameLookup: function(parent, name /* , type*/) {
            if (/^[0-9]+$/.test(name)) {
                return parent + "[" + name + "]";
            } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                return parent + "." + name;
            }
            else {
                return parent + "['" + name + "']";
            }
        },

        appendToBuffer: function(string) {
            if (this.environment.isSimple) {
                return "return " + string + ";";
            } else {
                return {
                    appendToBuffer: true,
                    content: string,
                    toString: function() { return "buffer += " + string + ";"; }
                };
            }
        },

        initializeBuffer: function() {
            return this.quotedString("");
        },

        namespace: "Handlebars",
        // END PUBLIC API

        compile: function(environment, options, context, asObject) {
            this.environment = environment;
            this.options = options || {};

            Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

            this.name = this.environment.name;
            this.isChild = !!context;
            this.context = context || {
                programs: [],
                environments: [],
                aliases: { }
            };

            this.preamble();

            this.stackSlot = 0;
            this.stackVars = [];
            this.registers = { list: [] };
            this.compileStack = [];
            this.inlineStack = [];

            this.compileChildren(environment, options);

            var opcodes = environment.opcodes, opcode;

            this.i = 0;

            for(l=opcodes.length; this.i<l; this.i++) {
                opcode = opcodes[this.i];

                if(opcode.opcode === 'DECLARE') {
                    this[opcode.name] = opcode.value;
                } else {
                    this[opcode.opcode].apply(this, opcode.args);
                }
            }

            return this.createFunctionContext(asObject);
        },

        nextOpcode: function() {
            var opcodes = this.environment.opcodes;
            return opcodes[this.i + 1];
        },

        eat: function() {
            this.i = this.i + 1;
        },

        preamble: function() {
            var out = [];

            if (!this.isChild) {
                var namespace = this.namespace;

                var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
                if (this.options.data) { copies = copies + " data = data || {};"; }
                out.push(copies);
            } else {
                out.push('');
            }

            if (!this.environment.isSimple) {
                out.push(", buffer = " + this.initializeBuffer());
            } else {
                out.push("");
            }

            // track the last context pushed into place to allow skipping the
            // getContext opcode when it would be a noop
            this.lastContext = 0;
            this.source = out;
        },

        createFunctionContext: function(asObject) {
            var locals = this.stackVars.concat(this.registers.list);

            if(locals.length > 0) {
                this.source[1] = this.source[1] + ", " + locals.join(", ");
            }

            // Generate minimizer alias mappings
            if (!this.isChild) {
                for (var alias in this.context.aliases) {
                    if (this.context.aliases.hasOwnProperty(alias)) {
                        this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
                    }
                }
            }

            if (this.source[1]) {
                this.source[1] = "var " + this.source[1].substring(2) + ";";
            }

            // Merge children
            if (!this.isChild) {
                this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
            }

            if (!this.environment.isSimple) {
                this.source.push("return buffer;");
            }

            var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

            for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
                params.push("depth" + this.environment.depths.list[i]);
            }

            // Perform a second pass over the output to merge content when possible
            var source = this.mergeSource();

            if (!this.isChild) {
                var revision = Handlebars.COMPILER_REVISION,
                    versions = Handlebars.REVISION_CHANGES[revision];
                source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
            }

            if (asObject) {
                params.push(source);

                return Function.apply(this, params);
            } else {
                var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
                Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
                return functionSource;
            }
        },
        mergeSource: function() {
            // WARN: We are not handling the case where buffer is still populated as the source should
            // not have buffer append operations as their final action.
            var source = '',
                buffer;
            for (var i = 0, len = this.source.length; i < len; i++) {
                var line = this.source[i];
                if (line.appendToBuffer) {
                    if (buffer) {
                        buffer = buffer + '\n    + ' + line.content;
                    } else {
                        buffer = line.content;
                    }
                } else {
                    if (buffer) {
                        source += 'buffer += ' + buffer + ';\n  ';
                        buffer = undefined;
                    }
                    source += line + '\n  ';
                }
            }
            return source;
        },

        // [blockValue]
        //
        // On stack, before: hash, inverse, program, value
        // On stack, after: return value of blockHelperMissing
        //
        // The purpose of this opcode is to take a block of the form
        // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
        // replace it on the stack with the result of properly
        // invoking blockHelperMissing.
        blockValue: function() {
            this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

            var params = ["depth0"];
            this.setupParams(0, params);

            this.replaceStack(function(current) {
                params.splice(1, 0, current);
                return "blockHelperMissing.call(" + params.join(", ") + ")";
            });
        },

        // [ambiguousBlockValue]
        //
        // On stack, before: hash, inverse, program, value
        // Compiler value, before: lastHelper=value of last found helper, if any
        // On stack, after, if no lastHelper: same as [blockValue]
        // On stack, after, if lastHelper: value
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

            var params = ["depth0"];
            this.setupParams(0, params);

            var current = this.topStack();
            params.splice(1, 0, current);

            // Use the options value generated from the invocation
            params[params.length-1] = 'options';

            this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
        },

        // [appendContent]
        //
        // On stack, before: ...
        // On stack, after: ...
        //
        // Appends the string value of `content` to the current buffer
        appendContent: function(content) {
            this.source.push(this.appendToBuffer(this.quotedString(content)));
        },

        // [append]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Coerces `value` to a String and appends it to the current buffer.
        //
        // If `value` is truthy, or 0, it is coerced into a string and appended
        // Otherwise, the empty string is appended
        append: function() {
            // Force anything that is inlined onto the stack so we don't have duplication
            // when we examine local
            this.flushInline();
            var local = this.popStack();
            this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
            if (this.environment.isSimple) {
                this.source.push("else { " + this.appendToBuffer("''") + " }");
            }
        },

        // [appendEscaped]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Escape `value` and append it to the buffer
        appendEscaped: function() {
            this.context.aliases.escapeExpression = 'this.escapeExpression';

            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
        },

        // [getContext]
        //
        // On stack, before: ...
        // On stack, after: ...
        // Compiler value, after: lastContext=depth
        //
        // Set the value of the `lastContext` compiler value to the depth
        getContext: function(depth) {
            if(this.lastContext !== depth) {
                this.lastContext = depth;
            }
        },

        // [lookupOnContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext[name], ...
        //
        // Looks up the value of `name` on the current context and pushes
        // it onto the stack.
        lookupOnContext: function(name) {
            this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
        },

        // [pushContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext, ...
        //
        // Pushes the value of the current context onto the stack.
        pushContext: function() {
            this.pushStackLiteral('depth' + this.lastContext);
        },

        // [resolvePossibleLambda]
        //
        // On stack, before: value, ...
        // On stack, after: resolved value, ...
        //
        // If the `value` is a lambda, replace it on the stack by
        // the return value of the lambda
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"';

            this.replaceStack(function(current) {
                return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
            });
        },

        // [lookup]
        //
        // On stack, before: value, ...
        // On stack, after: value[name], ...
        //
        // Replace the value on the stack with the result of looking
        // up `name` on `value`
        lookup: function(name) {
            this.replaceStack(function(current) {
                return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
            });
        },

        // [lookupData]
        //
        // On stack, before: ...
        // On stack, after: data[id], ...
        //
        // Push the result of looking up `id` on the current data
        lookupData: function(id) {
            this.push('data');
        },

        // [pushStringParam]
        //
        // On stack, before: ...
        // On stack, after: string, currentContext, ...
        //
        // This opcode is designed for use in string mode, which
        // provides the string value of a parameter along with its
        // depth rather than resolving it immediately.
        pushStringParam: function(string, type) {
            this.pushStackLiteral('depth' + this.lastContext);

            this.pushString(type);

            if (typeof string === 'string') {
                this.pushString(string);
            } else {
                this.pushStackLiteral(string);
            }
        },

        emptyHash: function() {
            this.pushStackLiteral('{}');

            if (this.options.stringParams) {
                this.register('hashTypes', '{}');
                this.register('hashContexts', '{}');
            }
        },
        pushHash: function() {
            this.hash = {values: [], types: [], contexts: []};
        },
        popHash: function() {
            var hash = this.hash;
            this.hash = undefined;

            if (this.options.stringParams) {
                this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
                this.register('hashTypes', '{' + hash.types.join(',') + '}');
            }
            this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
        },

        // [pushString]
        //
        // On stack, before: ...
        // On stack, after: quotedString(string), ...
        //
        // Push a quoted version of `string` onto the stack
        pushString: function(string) {
            this.pushStackLiteral(this.quotedString(string));
        },

        // [push]
        //
        // On stack, before: ...
        // On stack, after: expr, ...
        //
        // Push an expression onto the stack
        push: function(expr) {
            this.inlineStack.push(expr);
            return expr;
        },

        // [pushLiteral]
        //
        // On stack, before: ...
        // On stack, after: value, ...
        //
        // Pushes a value onto the stack. This operation prevents
        // the compiler from creating a temporary variable to hold
        // it.
        pushLiteral: function(value) {
            this.pushStackLiteral(value);
        },

        // [pushProgram]
        //
        // On stack, before: ...
        // On stack, after: program(guid), ...
        //
        // Push a program expression onto the stack. This takes
        // a compile-time guid and converts it into a runtime-accessible
        // expression.
        pushProgram: function(guid) {
            if (guid != null) {
                this.pushStackLiteral(this.programExpression(guid));
            } else {
                this.pushStackLiteral(null);
            }
        },

        // [invokeHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // Pops off the helper's parameters, invokes the helper,
        // and pushes the helper's return value onto the stack.
        //
        // If the helper is not found, `helperMissing` is called.
        invokeHelper: function(paramSize, name) {
            this.context.aliases.helperMissing = 'helpers.helperMissing';

            var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
            var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

            this.push(helper.name + ' || ' + nonHelper);
            this.replaceStack(function(name) {
                return name + ' ? ' + name + '.call(' +
                    helper.callParams + ") " + ": helperMissing.call(" +
                    helper.helperMissingParams + ")";
            });
        },

        // [invokeKnownHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // This operation is used when the helper is known to exist,
        // so a `helperMissing` fallback is not required.
        invokeKnownHelper: function(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(helper.name + ".call(" + helper.callParams + ")");
        },

        // [invokeAmbiguous]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of disambiguation
        //
        // This operation is used when an expression like `{{foo}}`
        // is provided, but we don't know at compile-time whether it
        // is a helper or a path.
        //
        // This operation emits more code than the other options,
        // and can be avoided by passing the `knownHelpers` and
        // `knownHelpersOnly` flags at compile-time.
        invokeAmbiguous: function(name, helperCall) {
            this.context.aliases.functionType = '"function"';

            this.pushStackLiteral('{}');    // Hash value
            var helper = this.setupHelper(0, name, helperCall);

            var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

            var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
            var nextStack = this.nextStack();

            this.source.push('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
            this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.apply(depth0) : ' + nextStack + '; }');
        },

        // [invokePartial]
        //
        // On stack, before: context, ...
        // On stack after: result of partial invocation
        //
        // This operation pops off a context, invokes a partial with that context,
        // and pushes the result of the invocation back.
        invokePartial: function(name) {
            var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

            if (this.options.data) {
                params.push("data");
            }

            this.context.aliases.self = "this";
            this.push("self.invokePartial(" + params.join(", ") + ")");
        },

        // [assignToHash]
        //
        // On stack, before: value, hash, ...
        // On stack, after: hash, ...
        //
        // Pops a value and hash off the stack, assigns `hash[key] = value`
        // and pushes the hash back onto the stack.
        assignToHash: function(key) {
            var value = this.popStack(),
                context,
                type;

            if (this.options.stringParams) {
                type = this.popStack();
                context = this.popStack();
            }

            var hash = this.hash;
            if (context) {
                hash.contexts.push("'" + key + "': " + context);
            }
            if (type) {
                hash.types.push("'" + key + "': " + type);
            }
            hash.values.push("'" + key + "': (" + value + ")");
        },

        // HELPERS

        compiler: JavaScriptCompiler,

        compileChildren: function(environment, options) {
            var children = environment.children, child, compiler;

            for(var i=0, l=children.length; i<l; i++) {
                child = children[i];
                compiler = new this.compiler();

                var index = this.matchExistingProgram(child);

                if (index == null) {
                    this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
                    index = this.context.programs.length;
                    child.index = index;
                    child.name = 'program' + index;
                    this.context.programs[index] = compiler.compile(child, options, this.context);
                    this.context.environments[index] = child;
                } else {
                    child.index = index;
                    child.name = 'program' + index;
                }
            }
        },
        matchExistingProgram: function(child) {
            for (var i = 0, len = this.context.environments.length; i < len; i++) {
                var environment = this.context.environments[i];
                if (environment && environment.equals(child)) {
                    return i;
                }
            }
        },

        programExpression: function(guid) {
            this.context.aliases.self = "this";

            if(guid == null) {
                return "self.noop";
            }

            var child = this.environment.children[guid],
                depths = child.depths.list, depth;

            var programParams = [child.index, child.name, "data"];

            for(var i=0, l = depths.length; i<l; i++) {
                depth = depths[i];

                if(depth === 1) { programParams.push("depth0"); }
                else { programParams.push("depth" + (depth - 1)); }
            }

            return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
        },

        register: function(name, val) {
            this.useRegister(name);
            this.source.push(name + " = " + val + ";");
        },

        useRegister: function(name) {
            if(!this.registers[name]) {
                this.registers[name] = true;
                this.registers.list.push(name);
            }
        },

        pushStackLiteral: function(item) {
            return this.push(new Literal(item));
        },

        pushStack: function(item) {
            this.flushInline();

            var stack = this.incrStack();
            if (item) {
                this.source.push(stack + " = " + item + ";");
            }
            this.compileStack.push(stack);
            return stack;
        },

        replaceStack: function(callback) {
            var prefix = '',
                inline = this.isInline(),
                stack;

            // If we are currently inline then we want to merge the inline statement into the
            // replacement statement via ','
            if (inline) {
                var top = this.popStack(true);

                if (top instanceof Literal) {
                    // Literals do not need to be inlined
                    stack = top.value;
                } else {
                    // Get or create the current stack name for use by the inline
                    var name = this.stackSlot ? this.topStackName() : this.incrStack();

                    prefix = '(' + this.push(name) + ' = ' + top + '),';
                    stack = this.topStack();
                }
            } else {
                stack = this.topStack();
            }

            var item = callback.call(this, stack);

            if (inline) {
                if (this.inlineStack.length || this.compileStack.length) {
                    this.popStack();
                }
                this.push('(' + prefix + item + ')');
            } else {
                // Prevent modification of the context depth variable. Through replaceStack
                if (!/^stack/.test(stack)) {
                    stack = this.nextStack();
                }

                this.source.push(stack + " = (" + prefix + item + ");");
            }
            return stack;
        },

        nextStack: function() {
            return this.pushStack();
        },

        incrStack: function() {
            this.stackSlot++;
            if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
            return this.topStackName();
        },
        topStackName: function() {
            return "stack" + this.stackSlot;
        },
        flushInline: function() {
            var inlineStack = this.inlineStack;
            if (inlineStack.length) {
                this.inlineStack = [];
                for (var i = 0, len = inlineStack.length; i < len; i++) {
                    var entry = inlineStack[i];
                    if (entry instanceof Literal) {
                        this.compileStack.push(entry);
                    } else {
                        this.pushStack(entry);
                    }
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length;
        },

        popStack: function(wrapped) {
            var inline = this.isInline(),
                item = (inline ? this.inlineStack : this.compileStack).pop();

            if (!wrapped && (item instanceof Literal)) {
                return item.value;
            } else {
                if (!inline) {
                    this.stackSlot--;
                }
                return item;
            }
        },

        topStack: function(wrapped) {
            var stack = (this.isInline() ? this.inlineStack : this.compileStack),
                item = stack[stack.length - 1];

            if (!wrapped && (item instanceof Literal)) {
                return item.value;
            } else {
                return item;
            }
        },

        quotedString: function(str) {
            return '"' + str
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
                .replace(/\u2029/g, '\\u2029') + '"';
        },

        setupHelper: function(paramSize, name, missingParams) {
            var params = [];
            this.setupParams(paramSize, params, missingParams);
            var foundHelper = this.nameLookup('helpers', name, 'helper');

            return {
                params: params,
                name: foundHelper,
                callParams: ["depth0"].concat(params).join(", "),
                helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
            };
        },

        // the params and contexts arguments are passed in arrays
        // to fill in
        setupParams: function(paramSize, params, useRegister) {
            var options = [], contexts = [], types = [], param, inverse, program;

            options.push("hash:" + this.popStack());

            inverse = this.popStack();
            program = this.popStack();

            // Avoid setting fn and inverse if neither are set. This allows
            // helpers to do a check for `if (options.fn)`
            if (program || inverse) {
                if (!program) {
                    this.context.aliases.self = "this";
                    program = "self.noop";
                }

                if (!inverse) {
                    this.context.aliases.self = "this";
                    inverse = "self.noop";
                }

                options.push("inverse:" + inverse);
                options.push("fn:" + program);
            }

            for(var i=0; i<paramSize; i++) {
                param = this.popStack();
                params.push(param);

                if(this.options.stringParams) {
                    types.push(this.popStack());
                    contexts.push(this.popStack());
                }
            }

            if (this.options.stringParams) {
                options.push("contexts:[" + contexts.join(",") + "]");
                options.push("types:[" + types.join(",") + "]");
                options.push("hashContexts:hashContexts");
                options.push("hashTypes:hashTypes");
            }

            if(this.options.data) {
                options.push("data:data");
            }

            options = "{" + options.join(",") + "}";
            if (useRegister) {
                this.register('options', options);
                params.push('options');
            } else {
                params.push(options);
            }
            return params.join(", ");
        }
    };

    var reservedWords = (
        "break else new var" +
            " case finally return void" +
            " catch for switch while" +
            " continue function this with" +
            " default if throw" +
            " delete in try" +
            " do instanceof typeof" +
            " abstract enum int short" +
            " boolean export interface static" +
            " byte extends long super" +
            " char final native synchronized" +
            " class float package throws" +
            " const goto private transient" +
            " debugger implements protected volatile" +
            " double import public let yield"
        ).split(" ");

    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

    for(var i=0, l=reservedWords.length; i<l; i++) {
        compilerWords[reservedWords[i]] = true;
    }

    JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
        if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
            return true;
        }
        return false;
    };

    Handlebars.precompile = function(input, options) {
        if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
            throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
        }

        options = options || {};
        if (!('data' in options)) {
            options.data = true;
        }
        var ast = Handlebars.parse(input);
        var environment = new Compiler().compile(ast, options);
        return new JavaScriptCompiler().compile(environment, options);
    };

    Handlebars.compile = function(input, options) {
        if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
            throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
        }

        options = options || {};
        if (!('data' in options)) {
            options.data = true;
        }
        var compiled;
        function compile() {
            var ast = Handlebars.parse(input);
            var environment = new Compiler().compile(ast, options);
            var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
            return Handlebars.template(templateSpec);
        }

        // Template is only compiled on first use and cached after that point.
        return function(context, options) {
            if (!compiled) {
                compiled = compile();
            }
            return compiled.call(this, context, options);
        };
    };

    ;
// lib/handlebars/runtime.js

    Handlebars.VM = {
        template: function(templateSpec) {
            // Just add water
            var container = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    if(data) {
                        programWrapper = Handlebars.VM.program(i, fn, data);
                    } else if (!programWrapper) {
                        programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
                    }
                    return programWrapper;
                },
                merge: function(param, common) {
                    var ret = param || common;

                    if (param && common) {
                        ret = {};
                        Handlebars.Utils.extend(ret, common);
                        Handlebars.Utils.extend(ret, param);
                    }
                    return ret;
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop,
                compilerInfo: null
            };

            return function(context, options) {
                options = options || {};
                var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

                var compilerInfo = container.compilerInfo || [],
                    compilerRevision = compilerInfo[0] || 1,
                    currentRevision = Handlebars.COMPILER_REVISION;

                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
                            compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
                    } else {
                        // Use the embedded version info since the runtime doesn't know about this revision yet
                        throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                            "Please update your runtime to a newer version ("+compilerInfo[1]+").";
                    }
                }

                return result;
            };
        },

        programWithDepth: function(i, fn, data /*, $depth */) {
            var args = Array.prototype.slice.call(arguments, 3);

            var program = function(context, options) {
                options = options || {};

                return fn.apply(this, [context, options.data || data].concat(args));
            };
            program.program = i;
            program.depth = args.length;
            return program;
        },
        program: function(i, fn, data) {
            var program = function(context, options) {
                options = options || {};

                return fn(context, options.data || data);
            };
            program.program = i;
            program.depth = 0;
            return program;
        },
        noop: function() { return ""; },
        invokePartial: function(partial, name, context, helpers, partials, data) {
            var options = { helpers: helpers, partials: partials, data: data };

            if(partial === undefined) {
                throw new Handlebars.Exception("The partial " + name + " could not be found");
            } else if(partial instanceof Function) {
                return partial(context, options);
            } else if (!Handlebars.compile) {
                throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
            } else {
                partials[name] = Handlebars.compile(partial, {data: data !== undefined});
                return partials[name](context, options);
            }
        }
    };

    Handlebars.template = Handlebars.VM.template;
    ;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;

var pathTemplate = {
    start: "UIBezierPath *bezierPath = [UIBezierPath bezierPath];\n"
    , line: "\tCGPoint anchor = CGPointMake({{data.anchor.horizontal}}/2, {{data.anchor.vertical}}/2);" +
        "\n\tCGPoint point1 = CGPointMake({{data.forwardPrevious.horizontal}}/2, {{data.forwardPrevious.vertical}}/2);" +
        "\n\tCGPoint point2 = CGPointMake({{data.backwardDic.horizontal}}/2, {{data.backwardDic.vertical}}/2);" +
        "\n\t{{#if data.forward}}" +
        "[bezierPath addCurveToPoint:anchor controlPoint1:point1 controlPoint2:point2];" +
        "{{else}}" +
        "[bezierPath addLineToPoint:anchor];" +
        "{{/if}}\n"
    , end: "[bezierPath closePath];\n"
}

var PXCode = ""
//------------------------------------------------------------------------------

jamEngine.meaningfulIds = true;
jamEngine.parseFriendly = true;

//------------------------------------------------------------------------------

var expandTabs = false;

var explicit = true;

var promptString = "Save path components to JSON file:";

var signature = "json-action-manager-get-path-components-options";

var defaultOptions =
{
	defaultFile: "~/Desktop/path-components.json",
	dialogWidth: 512,
	dialogHeight: 768,
	dialogX: 0,
	dialogY: 0
};

var defaultFile = new File (defaultOptions.defaultFile);

//------------------------------------------------------------------------------

function displayDialog (text)
{
	// Get an available UI font among a list of favorites
	function getAvailableUIFont (fontsArray)
	{
		// List all fonts available in Photoshop in JSON format
		var fontsObj = { };
		for (var i = 0; i < app.fonts.length; i++)
		{
			var family = app.fonts[i].family;
			if (!(family in fontsObj))
			{
				fontsObj[family] = { };
			}
			fontsObj[family][app.fonts[i].style] =
			{
				"name": app.fonts[i].name
			};
		}
		var availableFont;
		var fontFamily;
		var fontStyle;
		var fontSize;
		for (var i = 0; i < fontsArray.length; i++)
		{
			fontFamily = fontsArray[i][0];
			if (fontFamily in fontsObj)
			{
				fontStyle = fontsArray[i][1];
				if (fontStyle in fontsObj[fontFamily])
				{
					fontSize = fontsArray[i][2];
					availableFont = ScriptUI.newFont (fontFamily, fontStyle, fontSize)
					break;
				}
			}
		}
		return availableFont;
	}
	var monospacedFont =
	getAvailableUIFont
	(
		[
			[ "Monaco", "Regular", 12 ],
			[ "Lucida Sans Typewriter", "Regular", 14 ],
			[ "Courier", "Regular", 16 ],
			[ "Courier New", "Regular", 14 ]
		]
	);
	defaultFile = new File (customOptions.defaultFile);
	var dialog = new Window ('dialog', "Get Path Components", undefined, { resizeable: true });
	dialog.orientation = "column";
	dialog.preferredSize.width = customOptions.dialogWidth;
	dialog.preferredSize.height = customOptions.dialogHeight;
	dialog.onResizing = function ()
	{
		this.layout.resize ();
	};
	dialog.onShow = function ()
	{
		var x = customOptions.dialogX;
		var y = customOptions.dialogY;
		if ((x !== 0) || (y !== 0))
		{
			this.location.x = x;
			this.location.y = y;
		}
		logArea.text = text;
	};
	var codeGroup = dialog.add ('group');
	codeGroup.orientation = "column";
	codeGroup.alignment = [ "fill", "fill" ];
	var logArea = codeGroup.add ('edittext', undefined, "", { multiline: true, readonly: true });
	logArea.alignment = [ "fill", "fill" ];
	logArea.minimumSize = [ -1, 64 ];
	if (monospacedFont)
	{
		logArea.graphics.font = monospacedFont;
	}
	var actionButtonsGroup = codeGroup.add ('group');
	actionButtonsGroup.alignment = [ "center", "bottom" ];
	actionButtonsGroup.orientation = "row";
	actionButtonsGroup.alignChildren = "fill";
	var file;
	var saveButton = actionButtonsGroup.add ('button', undefined, 'Save...');
	saveButton.onClick = function ()
	{
		file = defaultFile.saveDlg (promptString);
		if (file)
		{
			jamUtils.writeTextFile (file, text);
			defaultFile = file;
		}
	};
	var buttonsGroup = dialog.add ('group');
	buttonsGroup.alignment = [ "right", "bottom" ];
	buttonsGroup.orientation = "row";
	buttonsGroup.alignChildren = "fill";
	var cancelButton = buttonsGroup.add ('button', undefined, 'Cancel', { name: "cancel" });
	cancelButton.onClick = function ()
	{
		dialog.close (false);
	};
	var okButton = buttonsGroup.add ('button', undefined, 'OK', { name: "ok" });
	okButton.onClick = function ()
	{
		customOptions.defaultFile = defaultFile.fsName;
		customOptions.dialogWidth = dialog.size.width;
		customOptions.dialogHeight = dialog.size.height;
		customOptions.dialogX = dialog.location.x;
		customOptions.dialogY = dialog.location.y;
		dialog.close (true);
	};

    return dialog.show ();
}

//------------------------------------------------------------------------------

var appVersion = parseFloat (app.version);
if (appVersion >= 10)	// CS3
{
	try
	{
		var resultDescObj = jamEngine.jsonGet ([ [ "path", [ "<enumerated>", [ "ordinal", "targetEnum" ] ] ] ]);
		var pathComponents = jamHelpers.fromPathComponentList (resultDescObj["pathContents"][1][1]["pathComponents"], explicit);
	}
	catch (e)
	{
		var pathComponents = null;
	}
	if (pathComponents)
	{
		var customOptions = jamUtils.getCustomOptions (signature, defaultOptions);
//		if (displayDialog (jamJSON.stringify (pathComponents, (expandTabs) ? 4 : '\t')))
        //path build
        PXCode += Handlebars.compile(pathTemplate.start)()
        for(var i= 0, o = pathComponents.pathComponents[0].subpathListKey[0].points; i < o.length; i++ ){
            PXCode += Handlebars.compile(pathTemplate.line)({data: o[i]})
        }
        PXCode += Handlebars.compile(pathTemplate.end)()


		if (displayDialog (PXCode))
		{
			jamUtils.putCustomOptions (signature, customOptions, true);
		}
	}
	else
	{
		alert ("No path selected.");
	}
}
else
{
	alert ("Sorry, this script requires Photoshop CS3 or later.");
}

//------------------------------------------------------------------------------

