---
layout: page_itfa_subpage
title: The Transformer neural net architecture 
description: What powers a large language model (LLM)?
img: assets/img/3.jpg
importance: 2
---

<b>Neural nets</b> refer to the makeup of a computational models inspired by the structures and functions of neurons in brains. They are not new, their implementation into hardware and software dates as far back as 1953. 

<b>Large Language Models (LLMs)</b> are, in essence, computational models predicting and generating next words in sentences. There have been variations of language models as far back as 2003.

<b>The Transformer</b> is a neural net architecture, presented in a scientific paper – “Attention is All You Need”, published 2017. It is the power engine of modern day LLMs. The Transformer architecture has been implemented at the centre of billion-dollar AI LLM products such as ChatGPT, Copilot, Claude, Mistral, Grok, LLaMa etc. It is hard to overstate the impact of the Transformer on the AI services boom of 2023 and 2024, as well as on advances in AI, large language models, and neural nets.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/transformer.jpg" title="transformer" class="img-fluid rounded z-depth-1" style="width=50%"%}
    </div>
</div>
The Transformer. Attention is All You Need, Vaswani et al. (2017)


<i>“Attention Is All You Need is the most important advance in the recent history or neural networks.”</i>
-	 Ilya Stuskever, cofounder and former chief scientist of OpenAI

Neural networks used to be designed for specific use cases and tailored to a specific tasks. For example, different neural net designs were implemented for processing image, video, sound, code etc. The initial showcase of the Transformer in in Attention is All you Need was computerized translation. The authors reported state of the art results when testing the Transformer with automated benchmarks and human evaluation scores, and indicated intentions to test the Transformer on “other tasks” in the future.



Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="caption">
    LLMs output tokens based on probabilities obtained in the training stage. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/outputs.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
