---
layout: default
title: JSON Lines
subtitle: Documentation for the JSON Lines text file format
---

<p>
 This page describes the JSON Lines text format, also called newline-delimited JSON.
 JSON Lines is a convenient format for storing structured data that may be processed
 one record at a time. It works well with unix-style text processing tools and shell
 pipelines. It's a great format for log files. It's also a flexible format for passing
 messages between cooperating processes.
</p>
<p>
 The JSON Lines format has three requirements:
</p>
<h3>
 <a name="utf-8-encoding" class="anchor" href="#utf-8-encoding" id="utf-8-encoding"></a>
 1. UTF-8 Encoding
</h3>
<p>
 JSON allows encoding Unicode strings with only ASCII escape sequences, however those
 escapes will be hard to read when viewed in a text editor. The author of the JSON Lines
 file may choose to escape characters to work with plain ASCII files.
</p>
<p>
 Encodings other than UTF-8 are very unlikely to be valid when decoded as UTF-8 so the chance
 of <a href="https://en.wikipedia.org/wiki/Mojibake">accidentally misinterpreting characters</a>
 in JSON Lines files is low.
</p>
<p>
  Like the JSON standard <a href="https://datatracker.ietf.org/doc/html/rfc8259#section-8.1">
  a byte order mark (U+FEFF) must NOT be included</a>.
</p>
<h3>
 <a name="each-line-is-a-valid-json-value" class="anchor" href="#each-line-is-a-valid-json-value" id="each-line-is-a-valid-json-value"></a>
 2. Each Line is a Valid JSON Value
</h3>
<p>
 The most common values will be objects or arrays, but any JSON value is permitted.
 e.g. <code>null</code> is a valid value but a blank line is not.
</p>
<p>
 See <a href="https://json.org/">json.org</a> for a definition of JSON values.
</p>
<h3>
 <a name="line-terminator-is-n" class="anchor" href="#line-terminator-is-n" id="line-terminator-is-n"></a>
 3. Line Terminator is <code>'\n'</code>
</h3>
<p>
 This means <code>'\r\n'</code> is also supported because surrounding white space is
 implicitly ignored when parsing JSON values.
</p>
<p>
 Including a line terminator after the last JSON value in a file is strongly recommended
 but not required. Including a line terminator after every JSON value makes generating and
 concatenating JSON Lines files easier. A line terminator following the last JSON value in
 a file it must be the last byte in the file.
</p>
<h3>
 <a name="conventions" class="anchor" href="#conventions" id="conventions"></a>
 Conventions
</h3>
<p>
 JSON Lines files may be saved with the file extension <code>.jsonl</code>.
</p>
<p>
 Stream compressors like <code>gzip</code> or <code>bzip2</code> are recommended for
 saving space, resulting in <code>.jsonl.gz</code> or <code>.jsonl.bz2</code> files.
</p>
<p>
 MIME type may be <code>application/jsonl</code>, but this is not yet standardized; any help
 writing the RFC would be greatly appreciated (see <a href="https://github.com/wardi/jsonlines/issues/19">issue</a>).
</p>
<p>
 Text editing programs call the first line of a text file "line 1". The first value in a
 JSON Lines file should also be called "value 1".
</p>
