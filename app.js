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


var PXCode = ""

PXCode += _.template(document.getElementById("codeStarts").innerHTML)()

for(var i= 0, o = starJSON.pathComponents[0].subpathListKey[0].points; i < o.length; i++ ){
    PXCode += _.template(document.getElementById("line").innerHTML, {data: o[i]})
        + "<br/>"
}

PXCode += _.template(document.getElementById("codeEnds").innerHTML)()

document.write(PXCode);