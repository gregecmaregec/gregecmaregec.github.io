---
layout: page_cb_subpage
title: Ni hao 
description: Ni Hao
nav: true
img: assets/img/itfa/transformer_thumbnail.jpg
importance: 2
category: cb
---


Ni ye hao

<div class="caption">
    The Transformer. Attention is All You Need, Vaswani et al. (2017)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/transformer.jpg" title="transformer" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
    </div>
</div>

<br>

<div style="max-width: 830px; margin: 1rem auto; padding: 0 1rem;">
  <blockquote style="background-color: transparent; border-left: 5px solid #d64a4a; padding: 0.7rem; padding-bottom: 0.1rem; margin: 0; border-radius: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
    <p style="font-size: 1rem; line-height: 1.6; color: inherit; font-style: italic;">"“Attention Is All You Need is the most important advance in the recent history or neural networks.""</p>
    <footer style="font-size: 0.8rem; padding: 1rem; text-align: left;">— Ilya Stuskever, cofounder and former chief scientist of OpenAI</footer>
  </blockquote>
</div>

<br>

The initial showcase in "Attention is All You Need" for the Transformer is computerized translation. The authors reported state of the art results testing the Transformer on automated benchmarks and human evaluation scores, and indicated the intent to test the Transformer on “other tasks” beyond translation in the future. 

Only a year after the publication of Attention is All You Need, another milestone in the field of AI research was published - “Language Models are Unsupervised Multitask Learners” by Radford et al. (2018), where OpenAI showcased their state-of-the-art language model GPT-2. The GPT in OpenAI’s ChatGPT stands for generative pre-trained Transformer. 

Neural networks used to be designed for specific use cases and tailored to specific tasks. Different neural net designs were implemented for processing image, video, sound, text, code etc. The field of AI research is converging in recent years more and more towards one architecture for all types of data. The Transformer is a token-based prediction engine, regardless of the type of data tokenized.

E.g. Wav2Vec is a Transformer based AI, developed by Meta (formerly Facebook), able to generate natural sounding vocal speech of languages possessing no written form, such as Mboshi: a Bantu language spoken by approximately 150,000 people in the Republic of the Congo (Ji et al, 2022). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/tokens.jpg" title="tokenization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Many types of data can be broken down into tokens / tokenized. E.g. written English, where tokens are usually 3-7 characters long.

<br>
<br>

<div style="max-width: 830px; margin: 1rem auto; padding: 0 1rem;">
  <blockquote style="background-color: transparent; border-left: 5px solid #d64a4a; padding: 0.7rem; padding-bottom: 0.1rem; margin: 0; border-radius: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
    <p style="font-size: 1rem; line-height: 1.6; color: inherit; font-style: italic;">""What's really interesting is that this Transformer architecture actually has been remarkably resilient - basically the Transformer that came out in 2017 is the Transformer you would use today except you reshuffle some of the layer norms...
…I think people have been trying to change it, but it's proven remarkably resilient, but I do think that there should be even better architectures potentially - but you got to admire the resilience here. There's something profound about this architecture.""</p>
    <footer style="font-size: 0.8rem; padding: 1rem; text-align: left;">— Andrej Karpathy, cofounder of OpenAI, former head of AI at Tesla</footer>
  </blockquote>
</div>

<br>

LLMs output sentences that usually do not show up to the user all at once, but rather one token after another, or rather, to the perception of an average user, one word after another. This is due to the way the LLMs operate – they choose between tokens based on probability weights obtained in the training stage, and output the next token only when the sequence of previous tokens has been established – creating a stream of responses.  

<div class="caption">
    LLMs output tokens based on probabilities obtained in the training stage. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/outputs.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Presented in 1) is a JSON-output, a way of transmitting data across multiple programming languages. It is a mapping system, and carries with it multiple attributes, including the “response” of the LLM. In 2) illustrative probabilities of next tokens are shown. The next chosen token  will be added to the sentence. It is important to note that the highest probability output is not always chosen - token “the” is the most probable choice in the example above with a 73% probability of being chosen - while the next highest-probability possible token “how” would have been chosen 17% of the time. For this reason, running the same instruction to an LLM will result in different outputs. This also makes LLMs “black box” systems, as the output is not known before execution. 

<div class="caption">
    Example 1:
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/example1.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Example 2:
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/example2.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>