---
layout: page_itfa_subpage
title: The Transformer neural net architecture 
description: What powers a large language model (LLM)?
img: assets/img/3.jpg
importance: 2
---

<b>Neural net</b> refer to the makeup of computational models inspired by the structures and functions of neurons in brains. They are not new - their implementation into hardware and software dates as far back as 1953. 

<b>Large Language Models (LLMs)</b> are, in essence, computational models predicting and generating the next words in sentences. There have been variations of language models dating as far back as 2003.

<b>The Transformer</b> is a neural net architecture, presented in a scientific paper – “Attention is All You Need” by Vaswani et al. (2017). It is the power engine behind modern day AI systems and LLMs. The Transformer architecture has been implemented at the centre of billion-dollar AI products the likes of ChatGPT, Copilot, Claude, Mistral, Grok, LLaMa etc. It is hard to overstate the impact of the Transformer on the AI services boom of 2023 and 2024, as well as on recent advances in AI, large language models, and neural nets.


<div class="caption">
    The Transformer. Attention is All You Need, Vaswani et al. (2017)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/transformer.jpg" title="transformer" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
    </div>
</div>


<i>“Attention Is All You Need is the most important advance in the recent history or neural networks.”</i>
-	 Ilya Stuskever, cofounder and former chief scientist of OpenAI

Neural networks used to be designed for specific use cases and tailored to a specific tasks. For example, different neural net designs were implemented for processing image, video, sound, code etc. The initial showcase of the Transformer in in Attention is All you Need was computerized translation. The authors reported state of the art results when testing the Transformer with automated benchmarks and human evaluation scores, and indicated intentions to test the Transformer on “other tasks” in the future.

Neural networks used to be designed for specific use cases and tailored to a specific tasks. For example, different neural net designs were implemented for processing image, video, sound, code etc. The initial showcase for the Transformer in in Attention is All you Need was computerized translation. The authors reported state of the art results testing the Transformer on automated benchmarks and human evaluation scores, and indicated intentions to test the Transformer on “other tasks” in the future.

A mere year after the publication of Attention is All You Need, another milestone in the field of AI research was published: “Language Models are Unsupervised Multitask Learners” by Radford et al. (2018), where OpenAI showcased their state-of-the-art language model GPT-2. The GPT in OpenAI’s ChatGPT stands for generative pre-trained Transformer.

Text, images, code, ... – the Transformer even generates sound - e.g. Wav2Vec is a Transformer based AI, developed by Meta (formerly Facebook), able to generate natural sounding vocal speech of languages possessing no written form, such as Mboshi: a Bantu language spoken by approximately 150,000 people in the Republic of the Congo (Ji et al, 2022). The Transformer is a token-based prediction engine, not matter which data is tokenized.

Many types of data can be broken down into tokens / tokenized. E.g. written English, tokens are usually 3-7 characters long.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/outputs.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
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
