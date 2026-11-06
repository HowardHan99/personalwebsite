<!--
  Bio — shown on the homepage. Edit freely; save and the page refreshes.
  (This comment block is ignored.)

  Syntax:
    Blank line                 → new paragraph
    **bold**   _italic_        → bold / italic
    [text](https://url)        → link
    {{#e85d04:text}}           → colored text (any hex color)
    [pub:publication-id]       → link to a paper on this page (id from publications.ts)
    {title} {institution} {institutionName} {institutionLink}
                               → filled in from personalInfo.ts

  Research-line blocks (the two indented blocks with a thin left line):
    **_Label_**: text...       → "Label" shows as the small orange heading
    papers: id1, id2           → must be the LAST line of the paragraph (no blank line before it);
                                 shows as "CHI '24 · ASSETS '23" links. Paper ids are the
                                 BibTeX keys in data/publications.ts, e.g.
                                 han2027publicsim, marpally2026acme, han2026enhancedsim,
                                 han2024codesign, han2023robot, han2027proactive, han2026constructive
-->

I am a {title} at [{institution}, {institutionName}]({institutionLink}), advised by [Nikolas Martelaro](https://nikmartelaro.com/), and I work closely with [Aaron Steinfeld](https://www.cs.cmu.edu/~astein/) at the Robotics Institute. My research advances {{#e85d04:Human-Robot and Human-Agent Interaction}}, drawing on HCI, Robotics, Design, and Machine Learning.

**_Human-Robot Interaction_**: I am the lead PhD student on an NSF-funded project ($1.2M) on learning socially compliant robot behavior. My current work builds [robot simulations](#han2026enhancedsim) that collect high-value navigation demonstrations and [challenging scenarios](#han2027publicsim) from community members, and uses this data to learn and evaluate VLM-enhanced navigation policies for [community testing](#community).
papers: han2027publicsim, marpally2026acme, han2026enhancedsim, han2024codesign, han2023robot

**_Human-Agent Interaction_**: I build LLM-based Design Agents and model when and how they should intervene. Specifically, I study [adversarial agents](#han2026constructive) that push back on designers' ideas for reconsideration, and [proactive agents](#han2027proactive) that act as design copilots, offering timely perspectives.
papers: han2027proactive, han2026constructive

Before my PhD, I completed a research master's at CMU with [Daragh Byrne](http://daraghbyrne.me/), [Sarah Fox](https://www.sarahfox.info/), and [Ken Holstein](https://www.thecoalalab.com/kenholstein), and a Bachelor's in Urban Planning at Tongji University.

Below are my [publications](#publications) and our [community outreach](#community).
