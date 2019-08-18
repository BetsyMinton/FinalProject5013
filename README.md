# Final Project
- ### [Final Project](https://emm2305.github.io/FinalProject5013/Fractions.html)
- ### [Project Repository](https://github.com/emm2305/FinalProject5013)
- ### [Project Video](https://youtu.be/tUnJSPrJbRM)
- ### [ReadMe in HackMD](https://hackmd.io/5KoK7qy2SUmxbjwpgG2mFA?view)


<br>

# Final Project Design Plan
[Complete notes from the reading](https://hackmd.io/mDJzvLlaRSCMvg2Wo02CcA?view)

=="The biggest reason user experience should matter to you is that it matters to your users."==

## 5 Planes and their documentation
**Strategy**- strategy document
**Scope**- project scope
**Structure**- **[architectural diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G11bi3JbNwcpk39qzGl9tqYFuBNku8nue_)**
**Skeleton**- **[wireframe](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G1rS6qhjIpN-73HrlK5ID0HctyhXV22pig)**
**Surface**- style guide

**<span style="color:blue">My thoughts and ideas are in blue or purple, Notes from the book are in black</span>**




## Strategy
### Why are we making this product?

==Be explicit== 

<span style="color:purple">By 3rd grade, many students start to say that they don't like math or that they are bad at it.  At this level many of the math concepts being taught are abstracted from higher level math.   Students can no longer see how math fits into their life.   The goal of this project is to allow students to **"play with math."**</span>


**Project objectives**
<span style="color:blue">- Give students fun tools to explore more abstract math concepts in meaningful or fun ways.  
- Students will build confidence in their abilty to do math.
- Students will express a more positive attitude towards math (measured by asking to continue playing on the site?)</span>

**User needs**
- Who are your users? 
<span style="color:blue"> - Upper elementary school (3-6th grade) students.</span>
- What do they need?
  <span style="color:blue">  - experiences in math that help them really understand how math works
  - experiences that help them see how math can be applied to more than just math (art, science, coding, etc.)</span>
- What are the users' attitudes towards tech in general? 
<span style="color:blue">  - The target user will most likely be more hestitant about tech, in a capacity beyond consumption. </span>




## Scope
### What are we going to make?

<span style="color:blue">A website with interactive manipulatives and experiences that engage uses with math.  The interactives need to be simple to use.  Since this is a site geared towards less techy user it will direct users though experiences. </span> 

The project scope:
- defines the requirements and goals for the project
   <span style="color:blue"> - Clear pathways through the site.
    - Well defined pathways for going through the experiences.
    - Well labeled buttons and clear directions
    - Engaging interactives that teach concepts in a way that leads to understanding.  </span>
- defines a common language, important when working in teams
   <span style="color:blue"> - Manipulatives are more open ended
   - Interactives are guided but open to user input in some way.  </span>
- addresses potentional conflicts and issues
   <span style="color:blue"> - With user input there are likely to be bugs we can't anticipate with out extentise user testing.
   - The more we guide users through and experience the more likely we take away some of the interactivity or exploration. </span>
- is a reference for all future project work

Hardware requirements:
<span style="color:blue">- The site needs to work on both computers and tablets without the need for additional software installation.   The goal of student use makes this a requirement.</span>

Content requirments:
<span style="color:blue">Concepts that are often overlook by other math sites becAre there content requirements? </span>


Notes about content requirements:
- types of content- image, video, text, etc.
- size of the content features- mb, pixel, etc.
- who will create the content and how frequently will it be updated?
- content is hard work.




## The Structure Plane

*The shift from abstract to concrete*

==[My architectural diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G11bi3JbNwcpk39qzGl9tqYFuBNku8nue_)==

><span style="color:purple">Your site will have a structure whether or not you plan it out. The sites that are built according to a clear structural plan tend to be the ones that require less frequent overhauls, prouce contrete results for their owners, and satify the needs of their users."</span>

**Interaction design**
<span style="color:blue">The site is designed for older children so it needs to be very easy to navigate.  Multiple pathways will help encourage exploration.  </span>


**Conceptual model**
<span style="color:blue">A combination of explanatory interactives and interactives that let students play with the math</span>

**Dealing with error**
<span style="color:blue">Since the point of the site is to encourage interactivity, the chance for error is high.  Guiding users through some of the experiences can help with error but the balance will be to do that without limiting the flexbility.</span>

Edge cases will need to be considered for most of the site.  

### Information Architecture
- the structure of information so that people can understand and use it.
- categorization schemes should correspond to 
    - the site objectives
    - user needs
    - and intended content
    - <span style="color:blue">I think this approach will work best for the site since math is generally taught in categories. I think there needs to be some organicness to the organization though to help students see how concepts intertwine</span>
- ==it is best to strike a balance between the top down and bottom up approaches so important content details are not overlooked and the system stays flexible to accommodate changes== 



Information is organized into basic units called **nodes** which are then organized into a structure 
<span style="color:blue">A combination between heirachical and organic stucture seems to make the most sense.   A prominent navigation menu will help kids keep from getting lost in the site, but they will be able to move between places in a variety of ways</span>


## The Skeletal Plan
*Individual components and their relationships*


### Navigation Design Goals

1) provide users with a way to get from one page to another wihout having a link to every page on every other page.
2) commicate the relationships between navigation elements.
3) communicate the relationship between the content and the page a user is viewing. *"Where am I, and where can I go?"*


Global navigation- <span style="color:blue">My navbar that houses the big picture items.   Students can jump between learn and play and back to the start</span>

Local navigation- <span style="color:blue">As the site gets bigger and students drill down into specifics, the sidebar navigation menu will let them jump between related topics quickly and easily without going all the way back to the start.  This part isn't fleshed out since I was focusing on the p5 and other elements.</span>

Supplementary navigation- <span style="color:blue">The right sidebar will provide hints and links to related content based on user interaction</span>



### Information Design
 *The glue* 
 
 How do I best represent the information so that users can understand it more easily?
 
 What informations should be visual? 
 How should things be group or arranged?
 
 <span style="color:blue">Information on each page will be specific and limited to focus user attention.   Access to other related information will be easy to find with the local navigation sidebar.</span>
 
 
**Wireframes**
Integrate all 3 elements of the skeletal plane.
Combination of user experience and visual design. 

==[My wireframe](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G1rS6qhjIpN-73HrlK5ID0HctyhXV22pig)==



## The Surface Plane

How the information should be presented visually. 

Goes beyond aesthetics.  The visual design should serve a purpose.  It is a strategy.
- Focus user attention
    - Where does the eye go first?
    - <span style="color:blue">Simple colors will keep extra details from being distracting.  Main content will stay in the center of the page, and above the fold when on the computer</span>
- Separate different components of the site
    - Contrast can help draw attention or blend things into the background
    - Needs to be different enough that users know the contrast was intentional
    - <span style="color:blue">The canvas is intentionally different but only slightly.  I want it to blend as much as possible while letting the user know it is a separate entity</span>
- Reinforce the structure of the site
- Clarify user options
    - should not be busy or cluttered
    - guiding the user without overwhelming them.



Uniformity of sizing, fonts, colors etc. keeps a site from becoming overwhelming and makes design easier. 
- set a limited color pallete
- <span style="color:blue">Stuck to mostly one color for the site, beyond grays.   The muted colors help the manipulates on the Canvas pop</span>
- use consitent typography
- <span style="color:blue">I went a little fun with this one based on feedback since it is a kids site</span>
- The style guide is the documentation of the visual design for the site.  
    

Grid layouts helps ensure uniformity even when the template for the pages varies the underlying grid does not.  
==mobile devices make this harder==

<span style="color:blue">Even though it meant I had to do a big redesign, I chose to go back and use bootstrap to make the site both more aetheticaly pleasing and easier to organize. I orginally wasn't using much CSS at the start.  I can see the benefits now of having some idea of style set at the beginning.</span>

**Being thoughtful and deliberate in the short-term will save a lot of time in the long term.**



![](https://i.imgur.com/Ja7yagp.png)


Garrett, Jesse James. The Elements of User Experience: User-Centered Design for the Web and Beyond (2nd Edition) (Voices That Matter) (p. 162). Pearson Education. Kindle Edition. 



