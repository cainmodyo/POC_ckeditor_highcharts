
CKEDITOR.editorConfig = function( config )
{
  
  //CKEDITOR.config.enterMode = CKEDITOR.ENTER_BR;
  //CKEDITOR.config.shiftEnterMode = CKEDITOR.ENTER_P;
  
  config.toolbar = 'Content';
  config.toolbar_Content =
  [
    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    { name: 'editing', items : [ 'Find','Replace','-','SpellChecker' ] },
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','-', 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','RemoveFormat'] },
    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-' ] },
    { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
    { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
    { name: 'colors', items : [ 'TextColor','BGColor' ] },
    { name: 'insert', items : [ 'Image','Flash','Table' ] }
  ];

  /*config.toolbar = 'TextWidget';
  config.toolbar_TextWidget =
  [
    { name: 'document', items : [ 'Source','-','Bold','Italic', 'BulletedList', 'Table', '-', 'Link', 'TextColor', '-', 'Image', 'Embed','Flash','Attachment' ] }
  ];*/

  config.toolbar = 'Simple';
  config.toolbar_Simple =
  [
    { name: 'document', items : [ 'Source','-','Bold','Italic', 'BulletedList', 'Table', '-', 'Link', 'TextColor', '-', 'Image', 'Embed','Flash','Attachment' ] }
  ];

  config.toolbar = 'Email';
  config.toolbar_Email =
    [
      ['Source'],
      ['Cut','Copy','Paste','PasteText','PasteFromWord'],
      ['Undo','Redo','-','Find','Replace'],
      ['Styles','Format'],
      ['Bold','Italic','Underline','Strike','-', 'TextColor', 'BGColor'],
      ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
      ['Link','Unlink','Anchor'],
      ['Image','Embed','Attachment','Table', 'SpecialChar']
    ];
};