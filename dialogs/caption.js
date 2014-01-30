/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 *
 * @author: Mathias Novas [mathias@07.no]
 */

CKEDITOR.dialog.add('captionDialog', function(editor) {
    return {
        title: Drupal.t('Caption'),
        minWidth: 400,
        minHeight: 200,
        contents: [{
            id: 'captionTab',
            label: 'Caption',
            title: 'Caption',
            elements: [{
                id: 'caption',
                type: 'text',
                label: Drupal.t('Type in your caption here'),
                setup: function (element) {
                    this.setValue(element.getAttribute('title'));
                },
                commit: function (element) {
                    element.setAttribute('title', this.getValue());

                    if (!element.hasClass('caption')) {
                        element.addClass('caption');
                    }
                }
            }]
        }],
        onShow: function () {
            var selection = editor.getSelection(),
                element = selection.getStartElement();

            // Only allow images
            if (!element.$.tagName === 'IMG') {
                return;
            }

            this.element = element;

            // Check if the element already has a title attribute with content
            if (element.getAttribute('title').length > 0) {
                this.insertMode = false;
            }

            // If the element has a title, setup the element with it
            if (!this.insertMode) {
                this.setupContent(this.element);
            }
        },
        onOk: function () {
            var dialog = this,
                caption = this.element;

            // Commit the content set by the user
            this.commitContent(caption);
        }
    };
});
