---
layout: page_itfa_subpage
title: The Transformer neural net architecture - 
description: What powers a large language model (LLM)?
nav: true
img: assets/itfa/transformer_thumbnail.jpg
importance: 2
---

<b>Neural net</b> refers to the makeup of computational models inspired by the structures and functions of neurons in brains. They are not new - their implementation into hardware and software dates as far back as 1953. 

<b>Large Language Models (LLMs)</b> are, in essence, computational models predicting and generating next words in sentences. There have been variations of language models dating as far back as 2003.

<b>The Transformer</b> is a neural net architecture, presented in the scientific paper – “Attention is All You Need” by Vaswani et al. (2017). It is the power engine behind modern day AI systems and LLMs. The Transformer architecture has been implemented at the centre of billion-dollar AI products the likes of ChatGPT, Copilot, Claude, Mistral, Grok, LLaMa etc. It is hard to overstate the impact of the Transformer on the AI services boom of 2023 and 2024, as well as on recent advances in AI, large language models, and neural nets.


<div class="caption">
    The Transformer. Attention is All You Need, Vaswani et al. (2017)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/transformer.jpg" title="transformer" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
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

The initial showcase for the Transformer in in Attention is All you Need was computerized translation. The authors reported state of the art results with the Transformer on automated benchmarks and human evaluation scores, and indicated intentions to test the Transformer on “other tasks” in the future.

A mere year after the publication of Attention is All You Need, another milestone in the field of AI research was published: “Language Models are Unsupervised Multitask Learners” by Radford et al. (2018), where OpenAI showcased their state-of-the-art language model named GPT-2. The GPT in OpenAI’s ChatGPT stands for generative pre-trained Transformer. 

Neural networks used to be designed for specific use cases and tailored to a specific tasks. Different neural net designs were implemented for processing image, video, sound, code etc. The field of AI research is converging in recent years more and more towards one architecture for all types of data .

Text, images, code, ... – the Transformer even generates sound - e.g. Wav2Vec is a Transformer based AI, developed by Meta (formerly Facebook), able to generate natural sounding vocal speech of languages possessing no written form, such as Mboshi: a Bantu language spoken by approximately 150,000 people in the Republic of the Congo (Ji et al, 2022). The Transformer is a token-based prediction engine, not matter which data is tokenized.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/tokens.jpg" title="tokenization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Many types of data can be broken down into tokens / tokenized. E.g. written English, tokens are usually 3-7 characters long.

<div style="max-width: 830px; margin: 1rem auto; padding: 0 1rem;">
  <blockquote style="background-color: transparent; border-left: 5px solid #d64a4a; padding: 0.7rem; padding-bottom: 0.1rem; margin: 0; border-radius: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
    <p style="font-size: 1rem; line-height: 1.6; color: inherit; font-style: italic;">""What's really interesting is that this Transformer architecture actually has been remarkably resilient - basically the Transformer that came out in 2017 is the Transformer you would use today except you reshuffle some of the layer norms...
…I think people have been trying to change it, but it's proven remarkably resilient, but I do think that there should be even better architectures potentially - but you got to admire the resilience here. There's something profound about this architecture.""</p>
    <footer style="font-size: 0.8rem; padding: 1rem; text-align: left;">— Andrej Karpathy, cofounder of OpenAI, former head of AI at Tesla</footer>
  </blockquote>
</div>

<br>

LLMs output sentences that normally do not show up to the user all at once, but rather one token after another. This is due to the way the LLMs operate – they choose between tokens based on probability weights obtained in the training stage, and output the next token only when the sequence of previous tokens has been established – creating a stream of responses.  

<div class="caption">
    LLMs output tokens based on probabilities obtained in the training stage. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/outputs.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Presented in 1) is a JSON-formatted output, a way of transmitting data across multiple programming languages. It is a mapping system, and carries with it multiple attributes, including the “response” of the LLM. In 2) the probabilities of the next tokens are shown. It is Important to note that the highest probability output is not always chosen. Token “the” is the most probable output in the above example and has a 73.23% probability of being chosen - while the next highest-probability possible token “how” would have been chosen 16.72% of the time. For this reason, running the same instruction to an LLM will result in different outputs. This also makes LLMs “black box” systems, as the output is not known before execution.

<div class="caption">
    Example 1:
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/example1.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Example 2:
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/itfa/example2.jpg" title="LLM outputs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>