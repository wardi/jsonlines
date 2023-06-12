---
layout: default
title: Examples
---

<h3>
<a name="better-than-csv" class="anchor" href="#better-than-csv"><span class="octicon octicon-link"></span></a>Better than CSV</h3>

<div class="highlight"><pre><span class="p">[</span><span class="s2">"Name"</span><span class="p">,</span> <span class="s2">"Session"</span><span class="p">,</span> <span class="s2">"Score"</span><span class="p">,</span> <span class="s2">"Completed"</span><span class="p">]</span>
<span class="p">[</span><span class="s2">"Gilbert"</span><span class="p">,</span> <span class="s2">"2013"</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="kc">true</span><span class="p">]</span>
<span class="p">[</span><span class="s2">"Alexa"</span><span class="p">,</span> <span class="s2">"2013"</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="kc">true</span><span class="p">]</span>
<span class="p">[</span><span class="s2">"May"</span><span class="p">,</span> <span class="s2">"2012B"</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="kc">false</span><span class="p">]</span>
<span class="p">[</span><span class="s2">"Deloise"</span><span class="p">,</span> <span class="s2">"2012A"</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="kc">true</span><span class="p">]</span> 
</pre></div>

<p>CSV seems so easy that many programmers have written code to generate it themselves, and almost every implementation is different. Handling broken CSV files is a common and frustrating task. CSV has no standard encoding, no standard column separator and multiple character escaping standards. String is the only type supported for cell values, so some programs attempt to guess the correct types.</p>

<p>JSON Lines handles tabular data cleanly and without ambiguity. Cells may use the standard JSON types.</p>

<p>The biggest missing piece is an import/export filter for popular spreadsheet programs so that non-programmers can use this format.</p>

<h3>
<a name="easy-nested-data" class="anchor" href="#easy-nested-data"><span class="octicon octicon-link"></span></a>Easy Nested Data</h3>

<div class="highlight"><pre><span class="p">{</span><span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Gilbert"</span><span class="p">,</span> <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[[</span><span class="s2">"straight"</span><span class="p">,</span> <span class="s2">"7♣"</span><span class="p">],</span> <span class="p">[</span><span class="s2">"one pair"</span><span class="p">,</span> <span class="s2">"10♥"</span><span class="p">]]}</span>
<span class="p">{</span><span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Alexa"</span><span class="p">,</span> <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[[</span><span class="s2">"two pair"</span><span class="p">,</span> <span class="s2">"4♠"</span><span class="p">],</span> <span class="p">[</span><span class="s2">"two pair"</span><span class="p">,</span> <span class="s2">"9♠"</span><span class="p">]]}</span>
<span class="p">{</span><span class="nt">"name"</span><span class="p">:</span> <span class="s2">"May"</span><span class="p">,</span> <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[]}</span>
<span class="p">{</span><span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Deloise"</span><span class="p">,</span> <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[[</span><span class="s2">"three of a kind"</span><span class="p">,</span> <span class="s2">"5♣"</span><span class="p">]]}</span>
</pre></div>


<p>JSON Lines' biggest strength is in handling lots of similar nested data structures. One <code>.jsonl</code> file is easier to work with than a directory full of XML files.</p>

<p>If you have large nested structures then reading the JSON Lines text directly isn't recommended. Use the "jq" tool to make viewing large structures easier:</p>

<div class="highlight"><pre>grep pair winning_hands.jsonl | jq .
</pre></div>

<div class="highlight"><pre><span class="p">{</span>
  <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Gilbert"</span><span class="p">,</span> 
  <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">[</span>
      <span class="s2">"straight"</span><span class="p">,</span> 
      <span class="s2">"7♣"</span>
    <span class="p">],</span> 
    <span class="p">[</span>
      <span class="s2">"one pair"</span><span class="p">,</span> 
      <span class="s2">"10♥"</span>
    <span class="p">]</span>
  <span class="p">]</span>
<span class="p">}</span>
<span class="p">{</span>
  <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Alexa"</span><span class="p">,</span> 
  <span class="nt">"wins"</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">[</span>
      <span class="s2">"two pair"</span><span class="p">,</span> 
      <span class="s2">"4♠"</span>
    <span class="p">],</span> 
    <span class="p">[</span>
      <span class="s2">"two pair"</span><span class="p">,</span> 
      <span class="s2">"9♠"</span>
    <span class="p">]</span>
  <span class="p">]</span>
<span class="p">}</span>
</pre></div>
<hr>
