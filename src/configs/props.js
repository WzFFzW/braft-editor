export default {
  height: 500,
  language: 'zh',
  controls: [
    'undo', 'redo', 'separator',
    'font-size', 'font-family', 'line-height', 'letter-spacing', 'separator',
    'indent','text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
    'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'separator',
    'headings', 'list_ul', 'list_ol', 'blockquote', 'code', 'separator',
    'link', 'split', 'hr', 'separator',
    'media', 'separator',
    'clear'
  ],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  media: {
    pasteImage: true,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onRemove: null,
    onChange: null,
    onInsert: null,
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: {
    floatLeft: true,
    floatRight: true,
    alignLeft: true,
    alignCenter: true,
    alignRight: true,
    link: true,
    size: true,
    remove: true
  },
  colors: [
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
    '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
  ],
  tabIndents: 2,
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  indents: [0, 14, 21, 28],
  lineHeights: [
    '1', '1.2', '1.5', '1.75', '2', '2.5', '3', '4'
  ],
  fontSizes: [
    12, 14, 16, 18, 20, 24,
    28, 30, 32, 36, 40, 48,
    56, 64, 72, 96, 120, 144
  ],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
  }],
  emojis: [
    "🤣", "🙌", "💚", "💛", "👏", "😉", "💯",
    "💕", "💞", "💘", "💙", "💝", "🖤", "💜",
    "❤️", "😍", "😻", "💓", "💗", "😋", "😇",
    "😂", "😹", "😘", "💖", "😁", "😀", "🤞",
    "😲", "😄", "😊", "👍", "😌", "😃", "😅",
    "✌️", "🤗", "💋", "😗", "😽", "😚", "🤠",
    "😙", "😺", "👄", "😸", "😏", "😼", "👌",
    "😎", "😆", "😛", "🙏", "🤝", "🙂", "🤑",
    "😝", "😐", "😑", "🤤", "😤", "🙃", "🤡",
    "😶", "😪", "😴", "😵", "😓", "👊", "😦",
    "😷", "🤐", "😜", "🤓", "👻", "😥", "🙄",
    "🤔", "🤒", "🙁", "😔", "😯", "☹️", "☠️",
    "😰", "😩", "😖", "😕", "😒", "😣", "😢",
    "😮", "😿", "🤧", "😫", "🤥", "😞", "😬",
    "👎", "💀", "😳", "😨", "🤕", "🤢", "😱",
    "😭", "😠", "😈", "😧", "💔", "😟", "🙀",
    "💩", "👿", "😡", "😾", "🖕"
  ],
  draftProps: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onSave: null
}