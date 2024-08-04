---
layout: page_itfa_subpage
title: Risk & Compliance considerations
description:  of AI utilization in International Trade
img: assets/img/itfa/risk_thumbnail.jpg
importance: 4
nav: true
---

#### Disclaimer:
<i>The content of this report is for general educational purposes only and does not constitute legal advice. The discussion of laws relating to AI systems and compliance considerations herein is based on research available at the time of writing and may not reflect current regulations or practices. The below list is not exhaustive. Organizations dealing with AI systems should consult legal experts and compliance professionals for up-to-date guidance specific to their jurisdiction and use case. </i>


<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

This section starts with compliance considerations for trade finance professionals utilising current state-of-the-art AI systems such as Large Language Models / AI chatbots.

<br>

#### Prompt injections by users

<div class="caption">
    Source: Andrej Karpathy
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/risks/chatgpt.jpg" title="LLM jailbreak" class="img-fluid rounded z-depth-1" style="width=50%"%}
    </div>
</div>

Prompt injections are a known security vulnerability of Large Language Models (LLMs). A prompt injection is an input (also known as prompt) that manipulates LLMs built-in security measures for intended behaviour by inserting specific instructions or commands into the input to gain information the models are otherwise trained to withhold.

The above is an example of ChatGPT, which has been instructed specifically not to provide the user with certain information that could result in bodily harm. However, the user inserts a trick to bypass this measure - this is referred to as a “jailbreak” in the AI community.

<div class="caption">
    Source: Jailbroken: How does LLM Safety Training Fail
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/risks/claude.jpg" title="LLM jailbreak" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
    </div>
</div>

Another example of prompt injection, this time with Anthropic's AI chatbot Claude. In this case, a user found a way to bypass the chatbot's built-in safety measures by using a clever trick. The user asked about instructions for damaging public property, which is normally a topic the AI is programmed to avoid discussing. However, instead of typing the question in plain English, the user converted their message into Base64.
Base64 is a way of representing text that is unreadable to human eyes, yet can be easily decoded by computers. It's often used for sending data over the internet. For example, the phrase "Hello world" in base64 looks like this: "SGVsbG8gd29ybGQ=".


<b>Compliance consideration:</b><br>
AI systems with access to confidential or personal data pose a liability risk of disclosure of information to unauthorized parties.

<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Copyright infringement
<br>
<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/risks/sonice.jpg" title="LLM copyright violation" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
    </div>
</div>

LLMs have been trained to deny requests to generate outputs that breach IP laws.
AI service companies are starting to provide image generating services with a high degree of confidence the image generated will be considered new and original. 
However, example shown is of ChatGPT producing a figure remarkably like Sonic the Hedgehog (copyright by SEGA inc.), which could potentially be considered copyright infringement in the eyes of a court, should this output be used for commercial purposes.
There is legal precedence for using computer software, e.g. Adobe Photoshop, to output material that is considered new and original with regards to IP law, and outputs that are subject to copyright to the rightful owner.

<div style="max-width: 830px; margin: 1rem auto; padding: 0 1rem;">
  <blockquote style="background-color: transparent; border-left: 5px solid #d64a4a; padding: 0.7rem; padding-bottom: 0.1rem; margin: 0; border-radius: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
    <p style="font-size: 1rem; line-height: 1.6; color: inherit;">Microsoft announces a new Copilot Copyright Commitment for customers:<br>
<i>“To address this customer concern, Microsoft is announcing our new Copilot Copyright Commitment. As customers ask whether they can use Microsoft’s Copilot services and the output they generate without worrying about copyright claims, we are providing a straightforward answer: yes, you can, and if you are challenged on copyright grounds, we will assume responsibility for the potential legal risks involved.”</i></p>
    <footer style="font-size: 0.8rem; padding: 1rem; text-align: left;">— Microsoft, September 2023</footer>
  </blockquote>
</div>


However, even with this commitment, bad faith use could be excluded. Microsoft, in the example above, could claim that the tool was used in bad faith and thus the user is in breach of the end user license agreement. It's important to note that the legal status of AI-generated content in relation to copyright law is in its infancy, evolving, and will vary by jurisdiction. 



<b>Compliance considerations:</b><br>

How does IP law classify AI generated outputs in jurisdictions of interest?<br><br>
Who is liable for ensuring the outputs of AIs used commercially do not breach IP and other laws?<br><br>
Is the organization contractually allowed to transform specific data with AI systems for commercial purposes that are provided by third parties?<br><br>
Are users of implemented AI systems appropriately aware about the risk of generating content breaching IP laws?<br><br>


<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Prompt injections from the web


<div class="caption">
    Source: Not what you signed up for: Compromizing Real-World LLM-Integrated Applications with Indirect Prompt Injection
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/risks/copilot.jpg" title="LLM fraud" class="img-fluid2 rounded z-depth-1" style="width=50%"%}
    </div>
</div>



Presented is Microsoft Bing’s AI response to a prompt from a user about the best movies of 2022. One of the pages surveyed on the web by the AI contained malicious code instructing the chatbot to output the contents highlighted in the red square. It contains a fraudulent link claiming to provide the user with a $200 Amazon gift card - if the user clicks on the link.

Similarities can be drawn with such outputs and phishing emails. 

For to the analysis of web-related data, users of AI systems should pay attention to the outputs and question the validity thereof, just as they would with arbitrary information found on unknown websites.

<b>Compliance consideration:</b><br>
Which party is liable in case fraud materializes from the outputs of third-party AI systems?


<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Regulatory overlap

<br>
Should your business seek to integrate OpenAI’s AI services, e.g. a company variant of ChatGPT in 2024, Microsoft will be the service provider thereof. 
Excerpt from Microsoft’s data processing policy for the service, taken June 2024:
 
<div class="caption">
    Source: Microsoft's OpenAI services data privacy, 2024
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/risks/azure.jpg" title="AI regulations" class="img-fluid rounded z-depth-1" style="width=50%"%}
    </div>
</div>

Sharing confidential and personal data stored within a company with third-party service providers warrants an inquiry of what data is being processed, and what data the service provider can see in its unencrypted form. While Microsoft pledges not to use company data to further train their models, the regulatory landscape in certain jurisdictions could necessitate them to monitor their AI systems for abuse (yellow line square).

A regulatory requirement for abuse monitoring could mandate an AI systems provider to gain access to unencrypted data shared with it through AI systems offered to organizations. Data processing regulations wordlwide often address data processing of Personal Data specificially. E.g. EU’s GDPR states that Personal Data are any information which are related to an identified or identifiable natural person.   

<b>Compliance consideration:</b><br><br>
Organizations engaging in International Trade may face legal liability if they fail to implement adequate training and safeguards to protect against processing personal and confidential data from within the organization by AI systems.<br><br>

<br>
<br>

<div style="max-width: 830px; margin: 1rem auto; padding: 0 1rem;">
  <blockquote style="background-color: transparent; border-left: 5px solid #d64a4a; padding: 0.7rem; padding-bottom: 0.1rem; margin: 0; border-radius: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
    <p style="font-size: 1rem; line-height: 1.6; color: inherit;"><i>“Meta will *not* release the multimodal versions of its AI products and models in the EU because of an unpredictable regulatory environment. 
This means that EU users of Ray-Ban Meta won't be able to use the image understanding features.
It also means that the EU industry will not have access to future multimodal versions of Llama-3.”</i></p>
    <footer style="font-size: 0.8rem; padding: 1rem; text-align: left;">— Yann LeCun, chief AI scientist at Meta (formerly Facebook)</footer>
  </blockquote>
</div>

<br>
<br>

<b>Compliance considerations:</b><br><br>
Organizations engaging in International may face legal liability if they fail to implement adequate training and safeguards to protect against processing personal and confidential data from within the organization by AI systems.<br><br>
How do data processing and AI abuse monitoring regulations interact in the jurisdiction of interest? <br><br>
After implementing AI solutions, who in an organization is responsible for monitoring AI regulatory changes?<br><br>

<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray   ;"></div>
<br>

#### Hallucinating fake data

<br>
In a cautionary tale highlighting the risks of uncritical reliance on modern day AI systems, a New York lawyer faced professional consequences having submitted a legal brief containing fictitious case citations generated by ChatGPT as evidence of legal precedence. In May 2023, attorneys Roberto Mata and Steven A. Schwartz of the law firm Levidow, Levidow & Oberman admitted to using ChatGPT to research case law for a personal injury lawsuit against an airline. The AI provided six case citations that appeared relevant, yet upon investigation by the court, were found to be completely fake. This incident led to reputational damage as well as sanctions against the lawyers - including a $5,000 fine and worldwide press coverage of the event.
AIs in are known to fabricate data. In the AI community, the term "hallucinating" is used to describe AI systems generating non-existent data yet the AI presenting it with full confidence as factual. 
The usage and implementation of the data outputted by AI systems bears significant scrutiny.

<b>Compliance consideration:</b><br>
IS it clear which party is liable for ensuring the factual validity of AI outputs? 


<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Social engineering

Social engineering is the term used for manipulation techniques utilized by malicious actors seeking to exploit human psychology by tricking people into divulging confidential information or performing actions that compromise operational security. Social engineering relies on human error and deception rather than traditional computer hacking methods. Modern day encryption is uncrackable with our current technology, as it would take more than the age of the universe to decode the common SHA256 algorithm used for encrypting data sent through the internet. For this reason, hackers increasingly rely on deceiving humans to introduce malicious software from within of an organization.

Estimates suggest that between 70-90% of all malicious breaches involve some form of social engineering. With the rise of AI, social engineering attacks could become more sophisticated, tailored to specific employees or organizations. 


Common social engineering tactics include:
Phishing: Sending fraudulent emails that appear to be from legitimate sources.
Pretexting: Creating a fabricated scenario to obtain information.
Baiting: Offering something enticing to entrap the victim.


<b>Compliance consideration:</b><br>
Organizations may face legal liability if they fail to implement adequate training and safeguards to protect against social engineering attacks.

<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Future compliance challenges: AI decision-making without human oversight

Previous sections discussed legal challenges involved with AI chatbots, current state-of-the-art AI systems already being put into use within organizations. 

The output of these AI systems requires the human user to decide whether or not to implement the outputs presented by the AI. As artificial intelligence systems become more advanced and autonomous, significant legal challenges could arise in regard to AI making decisions without direct human oversight.

Below are some compliance considerations of fully autonomous AI solutions. 
<br>
<br>
<b>Liability and Accountability</b><br>
When AI systems make autonomous decisions that result in harm or damages, determining liability becomes even more complicated compared to current user-implemented AI outputs. Who will be held responsible and will carry the liability - the AI developer, the organization implementing the AI, or the AI itself? Current legal frameworks struggle to address scenarios where there's no direct human decision-maker to hold accountable for untransparent outputs. This is especially relevant for organizations engaged in International Trade, as understanding who bears liability is of great importance.
<br>
<br>
<b>Transparency and Explainability</b><br>
Many AI systems, particularly those using the Transformer architecture, operate as "black boxes," making it difficult to understand how and why they arrive at decisions they do. This lack of transparency can pose challenges in case of legal proceedings based on their outputs, as the rationale behind a decision can not to be explained and justified, as it is usually mandated.This is particularly relevant to highly regulated industries like finance and insurance.
<br>
<br>
<b>Data Privacy and Consent</b><br>
Autonomous AI systems that process vast amounts of data to make decisions need to be structured to ensure compliance with an ever-increasing data privacy regulation landscape, such as GDPR. Remaining compliant with consent and data minimization sections of GDPR could become increasingly difficult with systems that function without human intervention. EU’s GDPR states that Personal Data are any information which are related to an identified or identifiable natural person. Many jurisdictions have data processing regulations that target handling of Personal Data. Being found in violation of data privacy laws can cause great reputational damage to organizations involved in International Trade, where trust is of extreme importance.
<br>
<br>
<b>Regulatory Compliance</b><br>
If AI systems become more autonomous, ensuring they are compliant with evolving AI regulations across different jurisdictions of operations in International Trade can become increasingly difficult. This is particularly relevant in highly regulated industries of finance and insurance, and with processing client data originating from multiple jurisdictions. Ensuring implemented autonomous AI systems are following rules and regulations in trade finance is just as important, if not more important, as ensuring compliance of other systems used in facilitating International Trade.
<br>
<br>
<b>Intellectual Property Rights</b><br>
According to the U.S. Copyright Office, a work is subject to copyright only when it is "fixed in a tangible medium of expression", in other words, when it is captured in a sufficiently permanent form that allows it to be perceived, reproduced, or communicated for more than a transitory duration. When AI systems create new works or innovations autonomously, legal questions arise about who owns the intellectual property rights, and what exactly constitutes a tangible medium. Could an entity utilizing generative AI to produce a multitude of creative outputs displayed on a website, for example, use this as a basis of a legal action on grounds of copyright infringement, if another organization commercially used media that appears similar the AI’s outputs? Current IP laws might be revised to address AI-generated content and inventions. Organizations in International Trade that use AI systems to generate materials should make the users aware of the specific IP risks.
<br>
<br>
<b>Contract Law</b><br>
AI systems engaging in autonomous negotiations or contract formations raise questions about the validity of such agreements under current contract law, which typically assumes human understanding and intent. In International Trade, observing contract law is immensely important.
<br>
<br>
<b>Ethics and Human Rights</b><br>
Autonomous AI decision-making in sensitive areas - e.g. assigning insurance covers or providing funding can raise ethical concerns and potentially infringe on human rights and non-discrimination regulation, necessitating novel legal frameworks to protect individuals and competition. E.g. The EU’s AI act of 2024 classified social scoring: classifying people based on behaviour, socio-economic status or personal characteristics as unacceptable risk regarding to AI implementation and thus forbids the usage of AI on such. 
<br>
<br>
<b>International Law and Jurisdiction</b><br>
With AI systems operating across borders, determining which laws apply and which courts have jurisdiction in case of disputes becomes increasingly complex.
<br>
<br>
<b>Algorithmic Governance:</b><br>
There will likely be more updates to regulatory frameworks to address development, deployment, and operation of autonomous AI systems.

As AI continues to advance, legislators, legal experts, as well as in-house council will need to address these challenges, potentially leading to novel legal doctrines tailored to address the unique issues posed by autonomous AI systems and the decision-making process within organizations. Internaitonal Trade organizations using autonomous AI systems will need to monitor developments and potentially reassess their risk mitigation strategies. A risk of implementing autonomous AI processes in International Trade today is anticipating how new algorithmic governance will regulate their use, and how to implement autonomous AI processes as end-to-end solutions that can be updated in the future to adjust to new regulatory requirements.

<br>
<br>