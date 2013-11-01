//
//  PJView.m
//  Project001
//
//  Created by Yarik Smirnov on 31/10/13.
//  Copyright (c) 2013 Softfacade, LLC. All rights reserved.
//

#import "PJView.h"

@interface PJView () {
    NSDictionary *_json;
    NSDictionary *_json2;
    NSDictionary *effects;
}

@end

@implementation PJView

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        
        NSString *path = [[NSBundle mainBundle] pathForResource:@"button" ofType:@"json"];
        NSString *path2 = [[NSBundle mainBundle] pathForResource:@"button-effects" ofType:@"json"];
        _json = [NSJSONSerialization JSONObjectWithData:[NSData dataWithContentsOfFile:path] options:NSJSONReadingAllowFragments error:NULL];
        NSLog(@"DIC: %@", _json);

         path = [[NSBundle mainBundle] pathForResource:@"star" ofType:@"json"];
        _json2 = [NSJSONSerialization JSONObjectWithData:[NSData dataWithContentsOfFile:path] options:NSJSONReadingAllowFragments error:NULL];
        
        effects = [NSJSONSerialization JSONObjectWithData:[NSData dataWithContentsOfFile:path2] options:NSJSONReadingAllowFragments error:NULL];
        
        self.backgroundColor = [UIColor whiteColor];
        
        UIBezierPath *bezierPath = [UIBezierPath bezierPath];
        
        NSDictionary *componetnts = [_json[@"pathComponents"] lastObject];
        NSArray *points = [[componetnts[@"subpathListKey"] lastObject] objectForKey:@"points"];
        
        NSDictionary *lastPoint = [points lastObject];
        
        NSDictionary *anchorDic = lastPoint[@"anchor"];
        CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
        [bezierPath moveToPoint:anchor];
        
        for (NSDictionary *dic in points) {
            
            NSDictionary *anchorDic = dic[@"anchor"];
            NSDictionary *backwardDic = dic[@"backward"];
            
            NSDictionary *forwardPrevious  = nil;
            if ([points indexOfObject:dic] == 0) {
                forwardPrevious = [[points lastObject] objectForKey:@"forward"];
            } else {
                forwardPrevious = [[points objectAtIndex:[points indexOfObject:dic] - 1] objectForKey:@"forward"];
            }
            
            CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
            CGPoint point1 = CGPointMake([forwardPrevious[@"horizontal"] floatValue] / 2, [forwardPrevious[@"vertical"] floatValue] / 2);
            CGPoint point2 = CGPointMake([backwardDic[@"horizontal"] floatValue] / 2, [backwardDic[@"vertical"] floatValue] / 2);
            
            if (forwardPrevious && backwardDic) {
                [bezierPath addCurveToPoint:anchor controlPoint1:point1 controlPoint2:point2];
            } else {
                [bezierPath addLineToPoint:anchor];
            }
            
        }
        
        [bezierPath closePath];
        
        CAShapeLayer *layer = [CAShapeLayer layer];
        layer.path = [bezierPath CGPath];
        
        layer.bounds = [bezierPath bounds];
        layer.fillColor = [[UIColor redColor] CGColor];
        layer.strokeColor = [[UIColor blackColor] CGColor];
        [self.layer addSublayer:layer];
        
        layer.frame = [bezierPath bounds];
        
        
    }
    return self;
}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event {
    
    CAShapeLayer *layer = [self.layer.sublayers lastObject];
    
    UIBezierPath *bezierPath = [UIBezierPath bezierPath];
    
    NSDictionary *componetnts = [_json2[@"pathComponents"] lastObject];
    NSArray *points = [[componetnts[@"subpathListKey"] lastObject] objectForKey:@"points"];
    
    NSDictionary *lastPoint = [points lastObject];
    
    NSDictionary *anchorDic = lastPoint[@"anchor"];
    CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
    [bezierPath moveToPoint:anchor];
    
    for (NSDictionary *dic in points) {
        
        NSDictionary *anchorDic = dic[@"anchor"];
        NSDictionary *backwardDic = dic[@"backward"];
        
        NSDictionary *forwardPrevious  = nil;
        if ([points indexOfObject:dic] == 0) {
            forwardPrevious = [[points lastObject] objectForKey:@"forward"];
        } else {
            forwardPrevious = [[points objectAtIndex:[points indexOfObject:dic] - 1] objectForKey:@"forward"];
        }
        
        CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
        CGPoint point1 = CGPointMake([forwardPrevious[@"horizontal"] floatValue] / 2, [forwardPrevious[@"vertical"] floatValue] / 2);
        CGPoint point2 = CGPointMake([backwardDic[@"horizontal"] floatValue] / 2, [backwardDic[@"vertical"] floatValue] / 2);
        
        if (forwardPrevious && backwardDic) {
            [bezierPath addCurveToPoint:anchor controlPoint1:point1 controlPoint2:point2];
        } else {
            [bezierPath addLineToPoint:anchor];
        }
        
    }
    
    [bezierPath closePath];
    
    CAAnimationGroup *group = [CAAnimationGroup animation];
    group.duration = 1;
    group.autoreverses = YES;
    
    CABasicAnimation *animation  = [CABasicAnimation animationWithKeyPath:@"path"];
    animation.fromValue = (id)layer.path;
    animation.toValue = (id)[bezierPath CGPath];
    animation.duration = 1;
    animation.autoreverses = YES;
    
    CABasicAnimation *color = [CABasicAnimation animationWithKeyPath:@"fillColor"];
    color.fromValue = (id)layer.fillColor;
    color.toValue = (id)[[UIColor yellowColor] CGColor];
    
    CABasicAnimation *animation2 = [CABasicAnimation animationWithKeyPath:@"position"];
    animation2.fromValue = [NSValue valueWithCGPoint:layer.position];
    animation2.toValue = [NSValue valueWithCGPoint:CGPointMake(600, 300)];
    animation2.duration = 1;
    animation2.autoreverses = YES;
    
    group.animations = @[animation, animation2, color];
    
    [layer addAnimation:group forKey:@"path"];
}


- (void)drawRect:(CGRect)rect {
    return;
    CGContextRef context = UIGraphicsGetCurrentContext();
    
    CGContextClearRect(context, rect);
    
    UIBezierPath *bezierPath = [UIBezierPath bezierPath];
    
    [[UIColor blackColor] setStroke];
    [[UIColor whiteColor] setFill];
    
    CGContextFillRect(context, rect);
    
    
    //Path Components
    
    
    
    NSDictionary *componetnts = [_json[@"pathComponents"] lastObject];
    NSArray *points = [[componetnts[@"subpathListKey"] lastObject] objectForKey:@"points"];
    
    NSDictionary *lastPoint = [points lastObject];
    
    NSDictionary *anchorDic = lastPoint[@"anchor"];
    CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
    [bezierPath moveToPoint:anchor];
    
    for (NSDictionary *dic in points) {
        
        NSDictionary *anchorDic = dic[@"anchor"];
        NSDictionary *backwardDic = dic[@"backward"];
        
        NSDictionary *forwardPrevious  = nil;
        if ([points indexOfObject:dic] == 0) {
            forwardPrevious = [[points lastObject] objectForKey:@"forward"];
        } else {
            forwardPrevious = [[points objectAtIndex:[points indexOfObject:dic] - 1] objectForKey:@"forward"];
        }
        
        CGPoint anchor = CGPointMake([anchorDic[@"horizontal"] floatValue] / 2, [anchorDic[@"vertical"] floatValue] / 2);
        CGPoint point1 = CGPointMake([forwardPrevious[@"horizontal"] floatValue] / 2, [forwardPrevious[@"vertical"] floatValue] / 2);
        CGPoint point2 = CGPointMake([backwardDic[@"horizontal"] floatValue] / 2, [backwardDic[@"vertical"] floatValue] / 2);
        
        if (forwardPrevious && backwardDic) {
            [bezierPath addCurveToPoint:anchor controlPoint1:point1 controlPoint2:point2];
        } else {
            [bezierPath addLineToPoint:anchor];
        }
        
    }
    
    [bezierPath closePath];
    
    
    // --- Drop Shadow ---
    
    CGContextSaveGState(context);
    NSDictionary *dropShadow = [effects[@"layerEffects"] objectForKey:@"dropShadow"];
    
    NSDictionary *color = dropShadow[@"color"];
    
    CGFloat dropShadowDist = [dropShadow[@"distance"] floatValue];
    CGFloat dropAngle = [dropShadow[@"localLightingAngle"] floatValue];
    
    CGFloat distanseX = -cosf(dropAngle * M_PI / 180) * dropShadowDist;
    CGFloat distanseY = sinf(dropAngle * M_PI / 180) * dropShadowDist;
    
    UIColor *shadowColor = [UIColor colorWithRed:[color[@"red"] floatValue] / 255.0
                                           green:[color[@"green"] floatValue]  / 255.0
                                            blue:[color[@"blue"] floatValue]  / 255.0
                                           alpha:[dropShadow[@"opacity"] floatValue] / 100];
    
    CGContextSetShadowWithColor(context, CGSizeMake(distanseX, distanseY), [dropShadow[@"blur"] floatValue], shadowColor.CGColor);
    
    // -- Drop Shadow end ---
    
    CGContextBeginTransparencyLayer(context, NULL);
    [bezierPath addClip];


    // -- Gradient --
    
    CGColorSpaceRef spacce = CGColorSpaceCreateDeviceRGB();
    
    
    NSDictionary *gradientFillDic = [effects[@"layerEffects"] objectForKey:@"gradientFill"];
    NSDictionary *gradientDic = gradientFillDic[@"gradient"];
    
    CGFloat interpolation = [gradientDic[@"interpolation"] floatValue];
    
    NSArray *colors = gradientDic[@"colors"];
    CGFloat opacity = [gradientFillDic[@"opacity"] floatValue] / 100;
    
    NSMutableArray *gradientColors = [NSMutableArray new];
    
    CGFloat *gradientLocations = (CGFloat *)calloc(sizeof(CGFloat), colors.count);
    
    for (NSDictionary *colorDic in colors) {
        
        CGFloat red = [[colorDic[@"color"] objectForKey:@"red"] floatValue];
        CGFloat green = [[colorDic[@"color"] objectForKey:@"green"] floatValue];
        CGFloat blue = [[colorDic[@"color"] objectForKey:@"blue"] floatValue];
        
        UIColor *color = [UIColor colorWithRed:red / 255.0
                                         green:green / 255.0
                                          blue:blue / 255.0
                                         alpha:opacity];
        [gradientColors addObject:(id)color.CGColor];
        
        CGFloat location = [colorDic[@"location"] floatValue] / interpolation;
        gradientLocations[[colors indexOfObject:colorDic]] =  location;
    }
    
    CGGradientRef gradient = CGGradientCreateWithColors(spacce, (__bridge CFArrayRef)(gradientColors), gradientLocations);

    CGRect bezierBounds = [bezierPath bounds];
    CGContextDrawLinearGradient(context, gradient,
                                CGPointMake(CGRectGetMidX(bezierBounds), CGRectGetMaxY(bezierBounds)),
                                CGPointMake(CGRectGetMidX(bezierBounds), CGRectGetMinY(bezierBounds)),
                                0);
    CGContextEndTransparencyLayer(context);

    // -- Inner Shadow
    
    NSDictionary *innerShadow = [effects[@"layerEffects"] objectForKey:@"innerShadow"];
    
    CGFloat inDist = [innerShadow[@"distance"] floatValue];
    CGFloat blur = [innerShadow[@"blur"] floatValue];
    NSDictionary *colorIn = innerShadow[@"color"];
    CGFloat angle = [innerShadow[@"localLightingAngle"] floatValue];
    
    distanseX = -cosf(angle * M_PI / 180) * inDist;
    distanseY = sinf(angle * M_PI / 180) * inDist;

    //distanseX = 0;
    
    UIColor *innerColor = [UIColor colorWithRed:[colorIn[@"red"] floatValue]/ 255.0
                                          green:[colorIn[@"green"] floatValue] / 255.0
                                           blue:[colorIn[@"blue"] floatValue] / 255.0
                                          alpha:[innerShadow[@"opacity"] floatValue] / 100];
    
    CGRect beizierBounds = CGRectInset([bezierPath bounds], -blur, -blur);
    beizierBounds = CGRectOffset(beizierBounds, -distanseX, -distanseY);
    beizierBounds = CGRectInset(CGRectUnion(beizierBounds, [bezierPath bounds]), -1, -1);
    
    UIBezierPath *negativeBezier = [UIBezierPath bezierPathWithRect:beizierBounds];
    [negativeBezier appendPath:bezierPath];
    negativeBezier.usesEvenOddFillRule = YES;
    
    CGContextSaveGState(context);
    {
        CGFloat xOffset = distanseX + round(beizierBounds.size.width);
        CGFloat yOffset = distanseY;
        CGContextSetShadowWithColor(context, CGSizeMake(xOffset + copysign(0.1, xOffset), yOffset + copysign(0.1, yOffset)), blur, innerColor.CGColor);
        [bezierPath addClip];
        CGAffineTransform transform = CGAffineTransformMakeTranslation(-round(beizierBounds.size.width), 0);
        [negativeBezier applyTransform:transform];
        [innerColor setFill];
        [negativeBezier fill];
    }
    CGContextRestoreGState(context);
    
    CGContextRestoreGState(context);
    
    /// ---- Stroke
    
    NSDictionary *strokeDic = [effects[@"layerEffects"] objectForKey:@"frameFX"];
    
    NSDictionary *colorDic = strokeDic[@"color"];
    
    [[UIColor colorWithRed:[colorDic[@"red"] floatValue] / 255.0
                    green:[colorDic[@"green"] floatValue] / 255.0
                     blue:[colorDic[@"blue"] floatValue] / 255.0
                    alpha:[strokeDic[@"opacity"] floatValue]/100] setStroke];
    CGContextSetLineWidth(context, [strokeDic[@"size"] floatValue]);
    [bezierPath stroke];
    
}


@end
