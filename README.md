### EOxElements: Your Building Blocks for Geospatial UI Development

### Workshop Duration: 2 hours

### Objective:

The goal of this workshop is to introduce participants to EOxElements and provide hands-on experience in using it to create web-based geospatial applications, specifically focusing on accessing and working with [STAC (SpatioTemporal Asset Catalog)](https://stacspec.org/). Additionally, the workshop will introduce [eodash](https://eodash.org/), an open-source library that simplifies orchestrating EOxElements and working with STAC catalogs.

### Pre-requisites:

- Participants should bring their own laptops.
- Basic understanding of HTML, CSS, and JavaScript.
- Familiarity with geospatial concepts (optional but beneficial).

### Workshop Outline:

#### **0. Introduction and Setup (15 minutes)**

1. **Welcome and Overview (5 minutes)**

   - Introduction to the speaker.
   - Overview of what will be covered in the workshop.
   - Brief introduction to STAC and its relevance in geospatial data management.

2. **Setup (10 minutes)**
   - Guide participants to install necessary tools and libraries:
     - Ensure everyone has a modern web browser (e.g., Chrome, Firefox).
     - Basic setup of a local web server (e.g., using `http-server` or similar tool).
     - Clone the workshop repository or download the necessary files.

#### **I. Understanding EOxElements (15 minutes)**

1. **Introduction to EOxElements Components (5 minutes)**

   - Overview of the key components provided by EOxElements (e.g., layout, map, layer control, etc.).
   - Explanation of the functionalities of each component and how they interact.
   - Examples of use cases where these components can be effectively utilized.

   📖 Have a look at the [Introduction](./INTRODUCTION.md)!

2. **Introduction to Custom Elements (Web Components) and Their Benefits (5 minutes)**

   - Briefly explain the concept of custom elements (web components) and their role in modern web development.
   - Discuss the benefits of using web components, such as encapsulation, reusability, and interoperability.
   - Highlight how EOxElements leverages custom elements to provide a modular and maintainable codebase.

3. **Exploring Documentation and Examples (5 minutes)**

   - Show participants where to find the official documentation and examples.
   - Walk through a basic example to demonstrate how EOxElements works.

   🖼️ See the [EOxElements Documentation and Examples](https://eox-a.github.io/EOxElements/).

#### **II. Hands-On Session: Building a Simple Map Application (70 minutes)**

1. **Creating a Basic Layout (5 minutes)**

   - Guide participants through creating a simple HTML file.
   - Include necessary EOxElements scripts and styles.
   - Initialize a basic layout using EOxElements components (`eox-layout` and `eox-layout-item`).

   💻 Follow along in [section 01](./01%20eox-layout/).

2. **Creating a Basic Map (10 minutes)**

   - Initialize a basic map using `eox-map`.

   💻 Follow along in [section 02](./02%20eox-map/).

3. **Adding Advanced Layers (10 minutes)**

   - Demonstrate how to add different types of layers (e.g., STAC, WMTS from Capabilities).

   💻 Follow along in [section 03](./03%20eox-map%20advanced/).

4. **Interactivity and Controls (15 minutes)**

   - Introduce `eox-layercontrol` and show how to customize its appearance and behavior.
   - Show how to configure layer properties (e.g., visibility, opacity).

   💻 Follow along in [section 04](./04%20eox-layercontrol/).

5. **Filtering and Selecting Items based on STAC Data (15 minutes)**

   - Introduce `eox-itemfilter` and show how to customize its appearance and behavior, and let the map react to a selection.
   - Demonstrate how to access a STAC collection manually.

   💻 Follow along in [section 05](./05%20eox-itemfilter/).

6. **Accessing and Displaying STAC Data (15 minutes)**

   - Show how to fetch and parse STAC metadata using `eox-stacinfo`.
   - Guide participants through the process of displaying STAC metadata in the provided slots.

   💻 Follow along in [section 06](./06%20eox-stacinfo/).

#### **III. Introduction to eodash (5 minutes)**

- Overview of eodash and its functionalities.
- Demonstrate how eodash simplifies the process of accessing and displaying STAC data.
- Show examples of using eodash out-of-the-box features for geospatial applications.

#### **IV. Q&A and Wrap-Up (15 minutes)**

1. **Q&A Session (10 minutes)**

   - Open the floor for participants to ask questions about EOxElements, STAC catalogs, eodash, troubleshooting, and best practices.
   - Provide solutions to common issues that may have arisen during the hands-on session.

2. **Wrap-Up and Next Steps (5 minutes)**
   - Summarize the key takeaways from the workshop.
   - Provide additional resources for learning more about EOxElements, STAC, eodash, and geospatial web development.
   - Encourage participants to continue experimenting and building with EOxElements and eodash.

### Materials Provided:

- This workshop repository with step-by-step instructions.
- Links to documentation, examples, and additional resources.

### Follow-Up:

- Invitation to contribute (issues, discussions etc.) to both [EOxElements repository](https://github.com/EOX-A/EOxElements) and/or [eodash repository](https://github.com/eodash).
