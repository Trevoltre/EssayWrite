document.addEventListener("DOMContentLoaded", () => {
    const blogs = [
        {
            title: "How to Write an A+ Essay",
            excerpt: "Writing an A+ essay might seem daunting, but with the right approach, anyone can excel...",
            content: `
                Writing an A+ essay might seem daunting, but with the right approach, anyone can excel. The first step is understanding the assignment requirements. Carefully read the instructions and clarify any doubts with your teacher or professor. A clear understanding of what is expected can prevent unnecessary mistakes and ensure your efforts align with the grading criteria.

Once you understand the task, start by brainstorming ideas. Jot down anything that comes to mind regarding the topic, no matter how trivial it seems. This process allows you to explore various angles and determine the focus of your essay. It's also a great way to discover unique perspectives that can make your essay stand out.

Next, conduct thorough research to gather credible sources. Use academic journals, books, and trusted websites to build a strong foundation for your arguments. Be sure to note down references and quotes you might use later. Research is the backbone of an outstanding essay, providing evidence to back your claims.

With research complete, create a detailed outline. Structure your essay with an introduction, body paragraphs, and a conclusion. A strong thesis statement in the introduction will guide your essay's direction. Each body paragraph should focus on a single idea supported by evidence, and the conclusion should tie everything together.

Finally, revise and proofread your essay. Look for grammar errors, awkward phrasing, and logical inconsistencies. Reading aloud can help you identify issues you might otherwise miss. Polishing your essay ensures clarity and professionalism, leaving a lasting impression on your reader.`
        },
        {
            title: "Managing Tight Deadlines",
            excerpt: "Deadlines are a part of life, but they can often feel overwhelming...",
            content: `
                Deadlines are a part of life, but they can often feel overwhelming. To manage them effectively, start by prioritizing your tasks. Identify what needs immediate attention and what can wait. Breaking down larger projects into smaller tasks can make the workload seem less intimidating.

Time management tools are invaluable when facing tight deadlines. Calendars, planners, and digital apps like Trello or Google Keep can help you allocate time efficiently. Set reminders and deadlines for yourself to ensure you stay on track. Block out distractions, whether it's turning off notifications or finding a quiet workspace.

Another key strategy is learning to delegate. If you're part of a team, assign tasks based on each member's strengths. Delegation not only lightens your load but also allows others to contribute effectively. Even in solo work, consider seeking help or advice to streamline your process.

Maintaining a positive attitude is essential under pressure. Stress can cloud judgment and hinder productivity. Take short breaks to clear your mind and recharge. Physical activity, even a short walk, can boost energy levels and help you refocus.

Finally, review your completed work before submission. Rushing to meet a deadline can lead to errors. Double-check for accuracy and consistency to ensure your work meets the required standards. With preparation and focus, meeting deadlines becomes much more manageable.`
        },
        {
            title: "Mastering Academic Formatting Styles",
            excerpt: "Academic writing requires strict adherence to formatting styles like APA, MLA, and Chicago...",
            content: `
                Academic writing requires strict adherence to formatting styles like APA, MLA, and Chicago. Each style has unique rules for citations, references, and structure. Understanding these guidelines is crucial for presenting a polished and professional paper.

APA style, commonly used in the social sciences, focuses on clarity and consistency. It requires in-text citations and a detailed reference list at the end. Pay close attention to formatting elements like running heads, page numbers, and spacing. Familiarity with APA guidelines will streamline your writing process.

MLA style, favored in the humanities, emphasizes simplicity. It uses in-text citations with the author’s last name and page number. The Works Cited page is a critical component, listing all sources alphabetically. Understanding MLA rules ensures your essay aligns with expectations in literature and cultural studies.

The Chicago Manual of Style offers two systems: Notes and Bibliography, and Author-Date. This style is often used in history and publishing. While it may seem complex, mastering Chicago style enhances the credibility of your work. Footnotes and endnotes provide detailed source information, reflecting thorough research.

Many online tools and citation generators are available to simplify formatting. Resources like Purdue OWL and citation software like Zotero or EndNote can save time and reduce errors. Practice using these tools to improve efficiency and accuracy in formatting.

Finally, attention to detail is critical. Small errors, like misplaced punctuation or incorrect capitalization, can detract from the professionalism of your paper. Double-check your citations and references to ensure they comply with the required style.`
        },
        {
            title: "Top Tips for Research Paper Success",
            excerpt: "Writing a research paper involves more than just putting words on paper...",
            content: `
                Writing a research paper involves more than just putting words on paper. The process begins with selecting a topic that genuinely interests you. A compelling topic keeps you motivated and engaged throughout the research and writing process. Ensure it aligns with the assignment requirements and offers ample material for exploration.

Once you have a topic, conduct thorough research using credible sources. Academic journals, books, and trusted online databases like JSTOR or PubMed are invaluable. Take detailed notes and organize your findings by theme or argument. This approach helps you build a strong foundation for your paper.

Creating an outline is the next step. A well-structured outline serves as a roadmap, guiding your writing and ensuring your ideas flow logically. Divide your paper into sections such as introduction, literature review, methodology, results, discussion, and conclusion, depending on the assignment’s requirements.

As you write, focus on clarity and evidence-based reasoning. Use data and examples to support your claims, and avoid vague or unsupported statements. Each paragraph should begin with a topic sentence and develop a single idea. Transitions between paragraphs should be seamless to maintain coherence.

Finally, edit and revise your paper meticulously. Look for grammar errors, awkward phrasing, and gaps in logic. Peer reviews can provide valuable feedback, helping you refine your arguments. With careful preparation and attention to detail, your research paper can stand out academically.`
        },
        {
            title: "Avoiding Plagiarism in Academic Writing",
            excerpt: "Plagiarism is a serious offense in academic writing, but it can be avoided...",
            content: `
                Plagiarism is a serious offense in academic writing, but it can be avoided with proper practices. Always credit the original author when using their ideas, whether through direct quotes or paraphrasing. Citations demonstrate your research efforts and respect for intellectual property.

Direct quotations should be enclosed in quotation marks and accompanied by proper citations. When paraphrasing, ensure you rewrite the original text in your own words while retaining the intended meaning. Even when paraphrasing, citations are essential to acknowledge the source.

Many academic institutions provide plagiarism detection tools like Turnitin or Grammarly. Use these tools to check your work for unintentional plagiarism. They highlight areas that require citations or rephrasing, ensuring your work maintains originality.

Proper note-taking during research is another way to avoid plagiarism. Clearly distinguish between your ideas and sourced material in your notes. This practice minimizes confusion when drafting your paper and ensures all references are appropriately credited.

Lastly, familiarize yourself with your institution’s plagiarism policies. Understanding the rules and consequences helps you maintain ethical writing practices. By prioritizing originality and adhering to citation guidelines, you can produce high-quality, plagiarism-free academic work.`
        }
    ];

    const blogContainer = document.getElementById("blogContainer");
    const popupContainer = document.getElementById("popupContainer");
    const popupContent = document.getElementById("popupContent");
    const closePopupBtn = document.getElementById("closePopup");

    // Function to render blogs
    const renderBlogs = () => {
        blogs.forEach((blog, index) => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <button onclick="showFullBlog(${index})" class="read-more-btn">Read More</button>
            `;
            blogContainer.appendChild(blogCard);
        });
    };

    // Function to show full blog
    window.showFullBlog = (index) => {
        const blog = blogs[index];
        popupContent.innerHTML = `
            <h2>${blog.title}</h2>
            <div>${blog.content}</div>
        `;
        popupContainer.style.display = "flex";
    };

    // Close popup
    closePopupBtn.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    renderBlogs();
});
