var starJSON = {
    "pathComponents": [
        {
            "shapeOperation": "add",
            "windingFill": true,
            "subpathListKey": [
                {
                    "closedSubpath": true,
                    "points": [
                        {
                            "anchor": {
                                "horizontal": 791.68765743073,
                                "vertical": 629.450881612091
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 583.256920651806,
                                "vertical": 528.272046602602
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 453.340025176495,
                                "vertical": 720.110856435596
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 436.748098230565,
                                "vertical": 489.015125950795
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 205.652367745765,
                                "vertical": 472.423199004865
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 397.491177578759,
                                "vertical": 342.506303529554
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 296.31234256927,
                                "vertical": 134.07556675063
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 504.743079348194,
                                "vertical": 235.254401760119
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 634.659974823505,
                                "vertical": 43.4155919271249
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 651.251901769435,
                                "vertical": 274.511322411925
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 882.347632254235,
                                "vertical": 291.103249357855
                            }
                        },
                        {
                            "anchor": {
                                "horizontal": 690.508822421241,
                                "vertical": 421.020144833167
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "unit": "pixelsUnit"
}
var layerJSON = {
    "blendOptions": {
    },
    "layerEffects": {
        "scale": 100,
        "dropShadow": {
            "enabled": true,
            "mode": "multiply",
            "color": {
                "red": 0,
                "green": 0,
                "blue": 0
            },
            "opacity": 75,
            "useGlobalAngle": true,
            "localLightingAngle": 120,
            "distance": 5,
            "chokeMatte": 0,
            "blur": 5,
            "noise": 0,
            "antiAlias": false,
            "transparencyShape": {
                "name": "Linear",
                "curve": [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "layerConceals": true
        },
        "innerShadow": {
            "enabled": true,
            "mode": "normal",
            "color": {
                "red": 255,
                "green": 255,
                "blue": 255
            },
            "opacity": 75,
            "useGlobalAngle": true,
            "localLightingAngle": 120,
            "distance": 2,
            "chokeMatte": 0,
            "blur": 7,
            "noise": 0,
            "antiAlias": false,
            "transparencyShape": {
                "name": "Linear",
                "curve": [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            }
        },
        "outerGlow": {
            "enabled": true,
            "mode": "normal",
            "color": {
                "red": 255,
                "green": 2.0038911094889,
                "blue": 115.13229444623
            },
            "opacity": 75,
            "glowTechnique": "softMatte",
            "chokeMatte": 0,
            "blur": 5,
            "noise": 0,
            "shadingNoise": 0,
            "antiAlias": false,
            "transparencyShape": {
                "name": "Linear",
                "curve": [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "inputRange": 50
        },
        "innerGlow": {
            "enabled": true,
            "mode": "normal",
            "color": {
                "red": 0.00389105058275,
                "green": 156.011678874493,
                "blue": 255
            },
            "opacity": 75,
            "glowTechnique": "softMatte",
            "chokeMatte": 0,
            "blur": 5,
            "shadingNoise": 0,
            "noise": 0,
            "antiAlias": false,
            "innerGlowSource": "edgeGlow",
            "transparencyShape": {
                "name": "Linear",
                "curve": [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "inputRange": 50
        },
        "gradientFill": {
            "enabled": true,
            "mode": "normal",
            "opacity": 100,
            "gradient": {
                "name": "Two Color",
                "gradientForm": "customStops",
                "interpolation": 4096,
                "colors": [
                    {
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0
                        },
                        "type": "userStop",
                        "location": 0,
                        "midpoint": 50
                    },
                    {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255
                        },
                        "type": "userStop",
                        "location": 4096,
                        "midpoint": 50
                    }
                ],
                "transparency": [
                    {
                        "opacity": 100,
                        "location": 0,
                        "midpoint": 50
                    },
                    {
                        "opacity": 100,
                        "location": 4096,
                        "midpoint": 50
                    }
                ]
            },
            "angle": 90,
            "type": "linear",
            "reverse": false,
            "align": true,
            "scale": 100,
            "offset": {
                "horizontal": 0,
                "vertical": 0
            }
        },
        "frameFX": {
            "enabled": true,
            "style": "outsetFrame",
            "paintType": "solidColor",
            "mode": "normal",
            "opacity": 100,
            "size": 7,
            "color": {
                "red": 0,
                "green": 0,
                "blue": 0
            }
        }
    }
}


var pathTemplate = {
    start: "UIBezierPath *bezierPath = [UIBezierPath bezierPath];<br/>"
    , line: "CGPoint anchor = CGPointMake({{data.anchor.horizontal}}/2, {{data.anchor.vertical}}/2);" +
        "<br/>CGPoint point1 = CGPointMake({{data.forwardPrevious.horizontal}}/2, {{data.forwardPrevious.vertical}}/2);" +
        "<br/>CGPoint point2 = CGPointMake({{data.backwardDic.horizontal}}/2, {{data.backwardDic.vertical}}/2);" +
        "<br/>{{#if data.forward}}" +
        "[bezierPath addCurveToPoint:anchor controlPoint1:point1 controlPoint2:point2];" +
        "{{else}}" +
        "[bezierPath addLineToPoint:anchor];" +
        "{{/if}}<br/>"
    , end: "[bezierPath closePath];<br/>"
}

var layerTemplate = {
    dropShadow: "<br/>// --- Drop Shadow ---<br/>" +
        "CGFloat dropShadowDist = {{data.distance}};<br/>" +
        "CGFloat dropAngle = {{#if data.localLightingAngle}} {{data.localLightingAngle}} {{/if}};<br/>" +
        "CGFloat distanseX = -cosf(dropAngle * M_PI / 180) * dropShadowDist;<br/>" +
        "CGFloat distanseY = sinf(dropAngle * M_PI / 180) * dropShadowDist;<br/>" +
        "UIColor *shadowColor = [UIColor colorWithRed:[{{data.color.red}}] / 255.0 green:[{{data.color.green}}]  / 255.0 blue:[{{data.color.blue}}]  / 255.0 alpha:[{{data.opacity}}]/100;<br/>" +
        "CGContextSetShadowWithColor(context, CGSizeMake(distanseX, distanseY), [{{data.blur}}], shadowColor.CGColor);<br/>" +
        "// -- Drop Shadow end --- CGContextBeginTransparencyLayer(context, NULL); [bezierPath addClip];"
    , gradient: {
        start: "<br/>// -- Gradient --<br/>" +
            "CGColorSpaceRef spacce = CGColorSpaceCreateDeviceRGB();<br/>" +
            "CGFloat interpolation = [{{data.gradient.interpolation}}];<br/>" +
            "CGFloat opacity = [{{data.opacity}}]/100;<br/>" +
            "CGFloat *gradientLocations = (CGFloat *)calloc(sizeof(CGFloat), {{data.gradient.colors.length}});<br/>"
        , color: "var colorDic = data.gradient.colors[i]; }}<br/>" +
            "CGFloat red = [{{colorDic.color.red}}];<br/>" +
            "CGFloat green = [{{colorDic.color.green}}];<br/>" +
            "CGFloat blue = [{{colorDic.color.blue}}];<br/>" +
            "UIColor *color = [UIColor colorWithRed:red / 255.0 green:green / 255.0 blue:blue / 255.0 alpha:opacity];<br/>" +
            "[gradientColors addObject:(id)color.CGColor];<br/>" +
            "CGFloat location = [{{colorDic.location}}] / interpolation;<br/>" +
            "gradientLocations[[colors indexOfObject:{{colorDic}}]] =  location;<br/>"
        , "end" : "//each color<br/>" +
            "CGGradientRef gradient = CGGradientCreateWithColors(spacce, (__bridge CFArrayRef)(gradientColors), gradientLocations);<br/>" +
            "CGRect bezierBounds = [bezierPath bounds];<br/>" +
            "CGContextDrawLinearGradient(context, gradient, CGPointMake(CGRectGetMidX(bezierBounds), CGRectGetMaxY(bezierBounds)), CGPointMake(CGRectGetMidX(bezierBounds), CGRectGetMinY(bezierBounds)), 0);<br/>" +
            "CGContextEndTransparencyLayer(context);"
    }
    , innerShadow: "<br/>// -- Inner Shadow<br/>" +
        "CGFloat inDist = [{{data.distance}}];<br/>" +
        "CGFloat blur = [{{data.blur}}];<br/>" +
        "CGFloat angle = [{{data.localLightingAngle}}];<br/>" +
        "distanseX = -cosf(angle * M_PI / 180) * inDist;<br/>" +
        "distanseY = sinf(angle * M_PI / 180) * inDist; //distanseX = 0;<br/>" +
        "UIColor *innerColor = [UIColor colorWithRed:[{{data.color.red}}]/ 255.0 green:[{{data.color.green}}] / 255.0 blue:[{{data.color.blue}}] / 255.0 alpha:[{{data.opacity}}]/100;<br/>" +
        "CGRect beizierBounds = CGRectInset([bezierPath bounds], -blur, -blur);<br/>" +
        "beizierBounds = CGRectOffset(beizierBounds, -distanseX, -distanseY);<br/>" +
        "beizierBounds = CGRectInset(CGRectUnion(beizierBounds, [bezierPath bounds]), -1, -1);<br/>" +
        "UIBezierPath *negativeBezier = [UIBezierPath bezierPathWithRect:beizierBounds]; [negativeBezier appendPath:bezierPath];<br/>" +
        "negativeBezier.usesEvenOddFillRule = YES;<br/>" +
        "CGContextSaveGState(context);<br/>" +
        "{<br/>" +
        "CGFloat xOffset = distanseX + round(beizierBounds.size.width);<br/>" +
        "CGFloat yOffset = distanseY;<br/>" +
        "CGContextSetShadowWithColor(context, CGSizeMake(xOffset + copysign(0.1, xOffset), yOffset + copysign(0.1, yOffset)), blur, innerColor.CGColor);<br/>" +
        "[bezierPath addClip];<br/>" +
        "CGAffineTransform transform = CGAffineTransformMakeTranslation(-round(beizierBounds.size.width), 0);<br/>" +
        "[negativeBezier applyTransform:transform];<br/>" +
        "[innerColor setFill];<br/>" +
        "[negativeBezier fill];<br/>" +
        "}<br/>" +
        "CGContextRestoreGState(context);<br/>" +
        "CGContextRestoreGState(context);"
    , stroke: '<br/>/// ---- Stroke<br/>' +
        '[[UIColor colorWithRed:[{{data.color.red}}] / 255.0 green:[{{data.color.green}}] / 255.0 blue:[{{data.color.blue}}] / 255.0 alpha:[{{data.opacity}}]/100 setStroke];<br/>' +
        'CGContextSetLineWidth(context, [{{data.size}}]);<br/>' +
        '[bezierPath stroke];'
}
var PXCode = ""


//path build

PXCode += Handlebars.compile(pathTemplate.start)()
for(var i= 0, o = starJSON.pathComponents[0].subpathListKey[0].points; i < o.length; i++ ){
    PXCode += Handlebars.compile(pathTemplate.line)({data: o[i]})
}
PXCode += Handlebars.compile(pathTemplate.end)()
//layer build

PXCode += Handlebars.compile(layerTemplate.dropShadow)({data: layerJSON.layerEffects.dropShadow})

PXCode += Handlebars.compile(layerTemplate.gradient.start)({data: layerJSON.layerEffects.gradientFill})
for(var i = 0, o = layerJSON.layerEffects.gradientFill.gradient.colors; i < o.length; i++){
    PXCode += Handlebars.compile(layerTemplate.gradient.color)({data: layerJSON.layerEffects.gradientFill})
}
PXCode += Handlebars.compile(layerTemplate.gradient.end)({data: layerJSON.layerEffects.gradientFill})


PXCode += Handlebars.compile(layerTemplate.innerShadow)({data: layerJSON.layerEffects.innerShadow})
PXCode += Handlebars.compile(layerTemplate.stroke)({data: layerJSON.layerEffects.frameFX})


document.write(PXCode);