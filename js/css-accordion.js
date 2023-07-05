const accordionElements = document.querySelectorAll(".css-accordion");

if (accordionElements.length > 0) {
    accordionToggleInit();
}

function accordionToggleInit() {
    for (const accordionElement of accordionElements) {
        const accordionToggle = accordionElement.querySelectorAll("[data-toggle-accordion]");

        accordionToggle.forEach(accordionButton => {
            accordionButton.addEventListener("click", () => {
                const isExpanded = accordionButton.getAttribute("aria-expanded");
                const accordionItem = accordionButton.closest(".css-accordion-item");
                const accordionBody = accordionButton.parentElement.nextElementSibling;

                if (accordionElement.dataset.onlyOneActive === "true") {
                    toggleAllAccordionItems(accordionElement, accordionButton, accordionBody, isExpanded);
                } else {
                    toggleSingleAccordionItem(accordionItem, accordionButton, accordionBody, isExpanded);
                }
            });
        });
    }
}

function toggleSingleAccordionItem(accordionItem, accordionButton, accordionBody, isExpanded) {
    if (isExpanded === "true") {
        accordionButton.setAttribute("aria-expanded", "false");
        accordionBody.setAttribute("aria-hidden", "true");
        accordionItem.classList.remove("active");
    } else {
        accordionButton.setAttribute("aria-expanded", "true");
        accordionBody.setAttribute("aria-hidden", "false");
        accordionItem.classList.add("active");
    }
}

function toggleAllAccordionItems(accordionElement, accordionButton, accordionBody, isExpanded) {
    const accordionItems = accordionElement.querySelectorAll(".css-accordion-item");
    const accordionItem = accordionButton.closest(".css-accordion-item");

    // collapse all accordion items
    accordionItems.forEach(accordionItem => {
        const button = accordionItem.querySelector("[data-toggle-accordion]");
        const body = accordionItem.querySelector("[aria-hidden]");

        accordionItem.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        body.setAttribute("aria-hidden", "true");
    });

    // open clicked accordion item
    toggleSingleAccordionItem(accordionItem, accordionButton, accordionBody, isExpanded);
}