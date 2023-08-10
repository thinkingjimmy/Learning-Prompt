---
sidebar_position: 11
---

# Scenario 10: Anime

Coincidentally, Midjourney released the Niji V5 version as I was writing this chapter, so I'll run the prompts below with the -niji 5 parameter.

## Various Anime Styles

With the niji 5 model, generated content defaults to an anime style. You can specify country, era, creators in style, or add anime styles - per [Midlibrary](https://www.midlibrary.io/midguide/niji-anime-version-of-midjourney-v4) , Midjourney supports over 120+ anime styles.

I won't list them all here, see my style list or Midlibrary for comprehensive details.

Here are some styles I find nice that the model also supports well (Statue of Liberty for prompt subject):

| <div style={{width:180}}>**Photo**</div> | **Name**                   | **Description**                                                                                                                                        |
| ---------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![MJ128](assets/MJ128.png)               | Chibi Anime Style          | Chibi anime features miniature, cute, caricatured characters with oversized heads and simplified bodies/expressions for dynamic effects.               |
| ![MJ129](assets/MJ129.png)               | Gakuen Anime Style         | Common style featuring high school life - student council, cultural festivals, romance, friendship, competition.                                       |
| ![MJ130](assets/MJ130.png)               | Gekiga Anime Style         | Sober, serious style tackling adult themes like social issues and philosophy. Uses monochrome palette, realistic expressions/behaviors.                |
| ![MJ131](assets/MJ131.png)               | J Horror Anime Style       | Horror genre dealing with supernatural themes like ghosts, spirits, monsters.                                                                          |
| ![MJ132](assets/MJ132.png)               | Jidaimono Anime Style      | Period dramas depicting Japanese history/culture - war, family conflicts, ninja, bushido, myths. Uses distinct Japanese art styles.                    |
| ![MJ133](assets/MJ133.png)               | Kawaii Anime Style         | Very cute, kawaii style featuring bright colors, rough outlines, exaggerated facial expressions.                                                       |
| ![MJ134](assets/MJ134.jpeg)              | Mecha Anime Style          | Robot-focused style depicting giant machines, mech battles, armored suits. Uses sci-fi, future settings, large-scale fights, dynamic battle scenes.    |
| ![MJ135](assets/MJ135.png)               | Realistic Anime Style      | Realist style with more true-to-life characters and storylines. More nuanced expressions, environments, emotive depth.                                 |
| ![MJ136](assets/MJ136.png)               | Semi-Realistic Anime Style | In-between realistic and anime styles - more realism but still stylized anime elements. Realistic stories but some anime-style rendering.              |
| ![MJ137](assets/MJ137.png)               | Shoji Anime Style          | Comedic style per manga artist Shotaro Ishinomori focused on individuals/small groups. Bright, harmonic scenes, exaggerated expressions, simple plots. |
| ![MJ138](assets/MJ138.png)               | Kemonomimi Anime Style     | Characters with animal ears/tails. Human or humanoid with various animal features, related to girls' manga, boys' manga styles.                        |

## Turning Photos into Anime Style

This uses the img2img feature we covered - simply include a photo URL in prompt, then add:

```other
panel from manga --iw 2
```

Another attempt adding manga artist Naoko Takeuchi didn't generate hands well:

![MJ139.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F7D11C92-7C2C-4228-81B3-4E66568304DA_2/iSy3AUZE4Px5izMSe7S7wA9msByQKRl5i8gCxObyg7wz/MJ139.png)
