---
sidebar_position: 9
---

# Scenario 8: Human

## Celebrity Photos

This is a new V5 feature - Midjourney now recognizes many celebrities. You can generate photos of them by adding their name when describing the subject. Let's generate some classic movie shots:

![MJ063.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/EB62943E-ADCC-4468-B60E-D169F0F3CF2B_2/xOETLxIXANtcgo60y3subblRZBPFAy2s1WiPfpD37tcz/MJ063.png)

The first is Keanu Reeves, the second is Vito Corleone (I didn't input the actor Marlon Brando). The prompts are very simple - try writing them yourself!

Answers at the end of the chapter.

## Clothing Model

Those in ecommerce may find this useful:

1. Use AI to generate a virtual human
2. Input a product photo (e.g. clothing) into the AI
3. Have the AI blend the virtual human and product together

Frankly, I don't think Midjourney is quite there yet, but it is possible. It just requires the blend technique from Technique 9 - I won't elaborate, but basically blended a product and human image:

![MJ062.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9FA8101B-B012-4339-BF1E-231EC942538F_2/njVETvNkyOeNowSlU3lxncBLQV9G5ZP7irNJSVFCUUwz/MJ062.png)

To verify consistency, I tried several images of Keanu:

![MJ064.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9B2361C9-2C05-484E-8BE8-FB0DCFA27DD3_2/txkN1BRQG3P7uEEEcl9DwmoRBa6PLiTrzOW9iLqay2Ez/MJ064.png)

It seems decent overall, but likely not robust enough for product shots, with noticeable differences from the original clothing (see buttons).

I think future Midjourney updates may improve this capability. And with custom model training, it seems achievable.

## Old Photos

This is an offshoot of celebrity photos that you may have seen - the prompts are simple, translate as needed:

|                          | **Prompt**                                            | **Explanation**                  |
| ------------------------ | ----------------------------------------------------- | -------------------------------- |
| What is the type?        | photography                                           |                                  |
| What is the subject?     | a group of Chinese people gathered around Darth Vader |                                  |
| What is the background?  | on the street                                         |                                  |
| What is the composition? | null                                                  | Not too important, let AI decide |
| What lens?               | fuji film                                             | Added for vintage look           |
| What is the style?       | style of 1990s                                        | Added 1990s style                |

Similar prompts generated these images:

![MJ095.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/2D0E911B-A54D-4168-8AC1-D14C54229124_2/yhc7BPiRWsZZ0UmozWshXLiXe9QKkRpxzQi9xpR9v9cz/MJ095.png)

## Tip 14: Add Styles - Time Periods

The old photos used 1990s style - strictly speaking, decades fit better in subject or environment, but works in style too since we want both 90s subjects and a 90s style.

This is the last style word usage - time periods.

Modifying the illustration prompts, I didn't specify artists, just style of 1920s. The rose has the right vibe, the cat top right is hilarious.

![MJ096.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/86D4276A-5254-4DC7-BC55-74559AFFF785_2/xwHZmIA6Z6NzghaKitsq6NbM2lo9EpgmeUAh46FLqSUz/MJ096.png)

## Tip 15: How to Generate More Diverse People

Diversity here refers to people's height, weight, body types, disabilities etc.

You may notice AI generated people tend to be very attractive. This reflects societal biases. Here are tips to get Midjourney to generate more diverse bodies.

**Method 1: Slider**

The weight method from last chapter also works for generating different body types. Here's an official example:

```other
Plus-sized ginger female dressed in bohemian vest, maxi skirt, espadrilles, walking across autumn campus courtyard, morning atmosphere:: plus-sized::-0.3 --ar 2:3
```

Adjust the plus-sized parameter to make the person slimmer or larger. Note negative doesn't always mean thinner - if your word is thin, a negative slider value will make them larger:

![MJ119.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FD1613E3-BD48-4D41-91C8-A0EA057B6883_2/exEgBwvmyRPyzadeRHy7BBJN7uLVk71FBNXHC0trXR4z/MJ119.png)

**Method 2: Direct Description**

Midjourney recognizes some diversity terms like:

- blind
- deaf
- cerebral palsy
- accessibility

![MJ120.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9770FDB6-F9D3-40EC-AB4B-2D6CA7AC58CD_2/lQyNTkK4OxqTtO9HwtyH5yu7qP7qu7DfTyRsxPsaF4Qz/MJ120.png)

## Answers of Celebrity Photo

Keanu is simple - describe subject, iconic outfit, walking in rain:

```other
Keanu Reeves, wearing a black long leather coat, walking down the street in the rain
```

And the Godfather one is even simpler:

```other
Vito Corleone sitting on a chair
```
