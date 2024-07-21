// textUtils.js
export const handleCapitalizeClick = (text, setText) => {
  setText(text.toUpperCase());
};

export const handleLowerClick = (text, setText) => {
  setText(text.toLowerCase());
};

export const handleClearTextClick = (setText) => {
  setText('');
};

export const handleCopyTextClick = (text) => {
  navigator.clipboard.writeText(text);
}

export const handleRemoveExtraSpaces = (text, setText) => {
  setText(text.replace(/\s+/g, ' '));
};