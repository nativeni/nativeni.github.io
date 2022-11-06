function toggle_visibility(tag) {
    if (tag.style.display == 'none' || tag.style.display == '')
        tag.style.display = 'block';
    else
        tag.style.display = 'none';
}


function get_tag_abstract(tag_button) {
    return document.getElementById("paper-abstract-" + tag_button.id);
}

function toggle_open_close(tag_button, tag_abstract) {
    if (tag_abstract.style.display == "block")
        tag_button.innerHTML = "ABSTRACT -";
    else
        tag_button.innerHTML = "ABSTRACT +";
}

tags = document.getElementsByClassName("paper-abstract-button");

for (idx=0; idx<tags.length; idx++) {
     tag_button = tags[idx];

     tag_button.addEventListener("click", function() {
         tag_abstract = get_tag_abstract(this);
         toggle_visibility(tag_abstract);
         toggle_open_close(this, tag_abstract);
     });

     tag_abstract = get_tag_abstract(tag_button);
     tag_abstract.style.display = 'none';
}
