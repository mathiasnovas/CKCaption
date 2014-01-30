/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 *
 * @author: Mathias Novas [mathias@07.no]
 * @file Plugin for inserting image caption
 */
(function () {

    CKEDITOR.plugins.add('caption', {
        requires: ['dialog'],

        init: function (editor) {
            // Add caption command
            editor.addCommand('captionDialog', new CKEDITOR.dialogCommand('captionDialog'));

            // Add button to toolbar
            editor.ui.addButton('Caption', {
                label: 'Insert caption',
                command: 'captionDialog',
                icon: this.path + 'icon.png'
            });

            // Add dialog
            CKEDITOR.dialog.add('captionDialog', this.path + 'dialogs/caption.js');
        }

    });

}) ();
