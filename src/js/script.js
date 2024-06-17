const button_bank = '<div id="rolltype-buttons" class="rolltype-container">' +
                        '<button class="rolltype-button publicroll" name="publicroll" data-tooltip="Roll publicly"><i class="fa-solid fa-dice-d20 fa-lg"></i></button>' +
                        '<button class="rolltype-button gmroll" name="gmroll" data-tooltip="Roll to the GM"><i class="fa-solid fa-user-secret fa-lg"></i></button>' +
                        '<button class="rolltype-button blindroll" name="blindroll" data-tooltip="Roll blindly"><i class="fa-solid fa-eye-low-vision fa-lg"></i></button>' +
                        '<button class="rolltype-button selfroll" name="selfroll" data-tooltip="Roll to yourself"><i class="fa-solid fa-ghost fa-lg"></i></button>' +
                    '</div>';


Hooks.on('renderSidebarTab', function(){
    hideSelect();
    addButtons();
    bindEventListeners();
})

function hideSelect() {
    $('#chat-controls select').hide();
    $('#rolltype-buttons').remove();
}

function addButtons() {
    let type = $('#chat-controls select option:selected')[0].value;
    $('#chat-controls').append(button_bank);
    $('#rolltype-buttons .rolltype-button.'+ type).addClass('active');
}

function switchRollType(type) {
    $('#chat-controls select option:selected').removeAttr('selected');
    $('#chat-controls select option[value="' + type + '"]').attr('selected');
    $('#rolltype-buttons .rolltype-button').removeClass('active');
    $('#rolltype-buttons .rolltype-button.'+ type).addClass('active');
    localStorage.setItem('core.rollMode', type);
}

function bindEventListeners() {
    $('#rolltype-buttons .rolltype-button').on('click', function(e){
        switchRollType(this.name);
    })
}