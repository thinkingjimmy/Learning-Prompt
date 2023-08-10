---
sidebar_position: 10
---

# Scenario 9: Landscapes

With real world objects and people covered, let's look at landscapes. Frankly, I'm not great at photography so may not explain things too professionally here - consider this more an overview of capabilities vs expert advice.

Please excuse any mistakes.

## Miniature Landscapes

You've likely seen epic landscape images across platforms, so won't dive into common methods here. Instead I'll share more novel approaches, starting with:

|                          | **Prompt**        | **Explanation**                                                                                                                                        |
| ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What is the type?        | Miniature faking  | Miniature faking, also called tilt-shift, uses camera work and processing to make real life scenes look miniature, like small plastic or metal models. |
| What is the subject?     | Train Lines       | Train lines                                                                                                                                            |
| What is the background?  | null              | Not critical, let AI decide                                                                                                                            |
| What is the composition? | null              | Not critical, let AI decide                                                                                                                            |
| What lens?               | null              | Not critical, let AI decide                                                                                                                            |
| What is the style?       | style of Japanese | I wanted that Japanese train style, so I added this parameter.                                                                                         |

I also made a Mars factory:

|                      | **Prompt**   | **Explanation** |
| -------------------- | ------------ | --------------- |
| What is the subject? | Mars Factory |                 |

![MJ121.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E69463B3-5B68-481B-A893-20D9EE1EB497_2/hyGjhHziwmlhEcfS0tPhQ7KawDdlnqvJpJ4Z0okY0U0z/MJ121.png)

I also like using this technique for succulent plants - just use "cute mini Haworthia cymbiformis plant in a pot" or similar:

![MJ125.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/95CC9DE9-FBB9-40CB-86C0-CF9479BC2940_2/5uDoiuDxDU2y5nLID8w1TodcMsuGa8bLjxuzwQntUgEz/MJ125.png)

## Architecture

Strictly speaking not a landscape, but didn't know where else to put this.

Since I'm not in architecture, I'll just share one use case - for man-made structures, you can specify the creator in the subject. For buildings, you don't need to state type:

|                      | **Prompt**                            | **Explanation**                                                                                                             |
| -------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| What is the type?？  | null                                  | Not critical, let AI decide                                                                                                 |
| What is the subject? | Structure by Dame Zaha Mohammad Hadid | Dame Zaha Mohammad Hadid, designer of the School of Design building at my alma mater, The Hong Kong Polytechnic University. |

Right is by Frank Gehry:

![MJ126.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/377B2D81-F65F-4317-BAD7-65B4868AA00B_2/72GaLRpEONxOO9lySggyiHnhhocKLloCb7wHIdhszm0z/MJ126.png)

Could be interesting to blend architectural styles - may spark intriguing designs!

## Tip 16: Change Camera & Lens

Covered lighting the past few chapters - now let's look at cameras and lenses.

You may have used phone apps that emulate old cameras vs just letting you tweak settings like white balance. Though under the hood they also just modify parameters, the experience can be neat.

You can get similar effects in Midjourney by specifying camera or lens types. From my tests, Midjourney supports:

1. Cameras: GoPro, Polaroid
2. Film: 8mm, 16mm, 35mm
3. Lenses: 15mm lens
4. Camera settings: long exposure, double exposure
5. Depth of field & focus: deep vs shallow focus, vanishing point

I really like the double exposure and long exposure looks:

![MJ102.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CD2D42A5-D707-43D1-9D24-248CED2CC709_2/RLyz77QLtc9ctokKwDFr4Cul1TF4QVVRBQu5mlY3mtcz/MJ102.png)

But choose suitable cameras/lenses for your scene - drone view, for example, won't work well for closeups:

| <div style={{width:180}}>**Photo**</div> | **Name**             | **Description**                                                                                                 | **Use Cases**                                                                                                        |
| ---------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![MJ100](assets/MJ100.png)               | GoPro                | Action camera perspective                                                                                       | Selfies, action shots                                                                                                |
| ![MJ101](assets/MJ101.jpeg)              | Drone                | Drone view from above                                                                                           | Aerial, skyline shots                                                                                                |
| ![MJ124](assets/MJ124.png)               | Polaroid             | Instant camera                                                                                                  |                                                                                                                      |
| ![MJ122](assets/MJ122.png)               | Black and white film | Monochrome photo                                                                                                |                                                                                                                      |
| ![MJ123](assets/MJ123.png)               | Kodachrome           | Kodak's vivid, high-contrast, archival color slide film                                                         | Vivid, punchy colors with great longevity                                                                            |
| ![MJ097](assets/MJ097.png)               | Shot on 8mm          | Portable, easy to use film format with lower resolution                                                         | Everyday life, family, travel                                                                                        |
| ![MJ098](assets/MJ098.png)               | Shot on 16mm         | 16mm and 35mm mainly used for movies, documentaries, commercials                                                | Movies, documentaries, commercials                                                                                   |
| ![MJ099](assets/MJ099.png)               | Shot on 35mm         | 16mm and 35mm mainly used for movies, documentaries, commercials                                                | Movies, documentaries, commercials                                                                                   |
| ![MJ105](assets/MJ105.png)               | Microscopic          | Magnified view                                                                                                  | Enlarging small objects                                                                                              |
| ![MJ106](assets/MJ106.png)               | Fisheye Lens         | Extreme wide angle 100-180° for distorted, exaggerated perspective                                              | Capturing whole scenes up close                                                                                      |
| ![MJ103](assets/MJ103.png)               | Wide Angle           | Fit more into frame                                                                                             | Landscapes, fitting more content                                                                                     |
| ![MJ104](assets/MJ104.jpeg)              | Ultra-Wide Angle     | Even wider field of view than wide angle                                                                        | Landscapes, fitting more content                                                                                     |
| ![MJ107](assets/MJ107.png)               | Panorama             | Wraparound wide format                                                                                          | Landscapes, fitting more content                                                                                     |
| ![MJ109](assets/MJ109.png)               | Short Exposure       | Freezing motion of fast moving subjects                                                                         | Sports, vehicles, performances needing frozen motion                                                                 |
| ![MJ108](assets/MJ108.png)               | Long Exposure        | Light trails for motion, mystical moods                                                                         | Light streaks, night scenes, star trails                                                                             |
| ![MJ110](assets/MJ110.png)               | Double Exposure      | Overlapping exposures for dense, distorted, hand-drawn effects                                                  | Portraits, landscapes - unique environments and moods                                                                |
| ![MJ118](assets/MJ118.png)               | f2.8                 | Large apertures let in more light for brighter images. f2.8 has high light transmission suitable for low light. | Can create shallow depth of field to blur background and foreground, ideal for portraits or product shots.           |
| ![MJ117](assets/MJ117.png)               | Depth of Field       | Range of sharpness - how much is in focus.                                                                      | Used to describe how much of a photo is sharp.                                                                       |
| ![MJ113](assets/MJ113.png)               | Soft Focus           | Deliberately softening focus for gentle, dreamy aesthetic via specialized lens filters.                         | More about evoking emotion vs deep/shallow focus. Gives a soft, almost blurred complexion to create a romantic look. |
| ![MJ116](assets/MJ116.png)               | Deep Focus           | Similar to deep depth of field.                                                                                 | Keeping entire scene sharp by using small aperture. Needs small focal lengths or farther shooting distance.          |
| ![MJ114](assets/MJ114.png)               | Shallow Focus        | Artistically isolates subject, popular for portraits.                                                           | Blurs background by using large aperture to keep only a plane/subject in focus.                                      |
| ![MJ111](assets/MJ111.png)               | Vanishing Point      | A point infinity used in perspective drawing - parallel lines converge towards it.                              | Helps create realism and depth.                                                                                      |
| ![MJ112](assets/MJ112.png)               | Vantage Point        | Perspective from a high point looking down diagonally.                                                          | Landscapes, fitting more content                                                                                     |
