 jQuery(document).ready(function() {
               
                $('[data-toggle="tooltip"]').tooltip();
                $('[data-toggle="popover"]').popover();

                $('#username').keyboard({

                    //theme: 'default',

                    //is_hidden: false,

                    //close_speed: 1000,

                    //enabled: false,

                    //layout: 'en_US',

                    // definimos un trigger al keyboard.
                    // Al hacer click sobre el selector que tenga el id (#) o la clase (.) definida
                    // se ocultara o mostrara el keyboard segun corresponda.
                    trigger: '#buttom1'
                });

                // Guardo en la variable 'keyboard' (puede ser cualkier otro nombre), la instancia del plugin creada,
                // para asi acceder a los metodos publicos del plugin
                var keyboard = $('#username').data('pluginKeyboard');
				

                // A partir de aqui inicializo los valores del cajon de 'Configuration Options' que vemos,
                // para que los campos tengan los valores con los que se creo la instancia del plugin.

                $('#hiddenCheck').attr('checked', !keyboard.getHidden());   // CheckBox k oculta o muestra el keyboard

                $('#openSpeedInput').val(keyboard.getOpenSpeed());          // Valor en milisegundos de la velocidad con que se muestra el keyboard

                $('#closeSpeedInput').val(keyboard.getCloseSpeed());        // Valor en milisegundos de la velocidad con que se oculta el keyboard


                // Cambiamos el tema del teclado de acuerdo al valor que este seleccionado en el campo 'Select' del Tema.
                // De momento solo tres temas, estoy trabajando en mejorarlos y agregar 2 temas más.
                $('#themeSelect').change(function(){
                    $(this).find(':selected').each(function () {
                        keyboard.setTheme($('#themeSelect').val());
                    })
                });

                // Definimos que al hacer click en el checkbox de 'Habilitar Keyboard' se bloquee o desbloquee el keyboard
                $('#enabledCheck').change(function(){
                    keyboard.setEnabled(!keyboard.getEnabled());
                });

                // Definimos que al hacer click en el checkbox de 'Mostrar Keyboard' se muestro u oculte el keyboard
                $('#hiddenCheck').change(function(){
                    keyboard.setHidden($(this).is(':checked'));
                });

                // Cambiamos la velocidad con que se muestra el keyboard al cambiar el valor del campo 'Open Speed', el valor esta en milisegundos
                $('#openSpeedInput').change(function(){
                    keyboard.setOpenSpeed($(this).val());
                });

                // Cambiamos la velocidad con que se oculta el keyboard al cambiar el valor del campo 'Close Speed', el valor esta en milisegundos
                $('#closeSpeedInput').change(function(){
                    keyboard.setCloseSpeed($(this).val());
                });
            });