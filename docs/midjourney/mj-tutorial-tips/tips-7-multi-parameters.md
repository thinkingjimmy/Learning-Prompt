---
sidebar_position: 7
---

# Tip 7: Using Multiple Parameters

When generating avatars with img2img, I found the issue was "text weight is higher than image weight", so the outputs didn't match the original. With iw, V5 caps image weight at 2. So I tried using the s parameter, and it improved results a lot.

If the image still doesn't match, you can try adding —s 200 to —iw 2. Note no comma between parameters. I've found adding s makes it much more similar - my guess is using s and iw together reduces the text weight.

Higher s values make the output more stylistic and abstract. So if it still doesn't match, try increasing s - e.g. to 500.

I want to demonstrate that combining parameters can have a synergistic effect, further enhancing the model's capabilities. Consider potential combinations when new parameters are introduced.
