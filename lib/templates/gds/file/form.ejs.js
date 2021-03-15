Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.self.imageUpload) { ;
__p += '\n<table class="govuk-table custom-table">\n    <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n        ';
 if (!ctx.disabled) { ;
__p += '\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'</th>\n        ';
 } ;
__p += '\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</th>\n        ';
 } else { ;
__p += '\n        <th scope="col" class="govuk-table__header govuk-!-width-one-half custom-th">' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</th>\n        ';
 } ;
__p += '\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</th>\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</th>\n        ';
 } ;
__p += '\n    </tr>\n    </thead>\n    <tbody class="govuk-table__body">\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n        <tr class="govuk-table__row">\n            ';
 if (!ctx.disabled) { ;
__p += '\n            <td class="govuk-table__cell"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" ref="removeLink">Remove</button></td>\n            ';
 } ;
__p += '\n            <td class="govuk-table__cell">\n                ';
 if (ctx.component.uploadOnly) { ;
__p += '\n                ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n                ';
 } else { ;
__p += '\n                <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink">' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</a>\n                ';
 } ;
__p += '\n            </td>\n            <td class="govuk-table__cell">\n                ' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'\n            </td>\n            ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\n            <td class="govuk-table__cell">\n                <select class="govuk-select" ref="fileType" >\n                    ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                    <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = ( type.label )) == null ? '' : __t) +
'</option>\n                    ';
 }); ;
__p += '\n                </select>\n            </td>\n            ';
 } ;
__p += '\n        </tr>\n    ';
 }) ;
__p += '\n    </tbody>\n</table>\n';
 } else { ;
__p += '\n<table class="govuk-table custom-table">\n    <thead class="govuk-table__head">\n        <tr class="govuk-table__row">\n            ';
 if (!ctx.disabled) { ;
__p += '\n            <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'</th>\n            ';
 } ;
__p += '\n            <th scope="col" class="govuk-table__header custom-th ' +
((__t = ( ctx.disabled ? 'govuk-!-width-full' : 'govuk-!-width-three-quarters')) == null ? '' : __t) +
'">' +
((__t = (ctx.t('Image name'))) == null ? '' : __t) +
'</th>\n        </tr>\n    </thead>\n    <tbody class="govuk-table__body">\n        ';
 ctx.files.forEach(function(file) { ;
__p += '\n        <tr class="govuk-table__row">\n        ';
 if (!ctx.disabled) { ;
__p += '\n          <td class="govuk-table__cell"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" ref="removeLink">Remove</button></td>\n        ';
 } ;
__p += '\n         <td class="govuk-table__cell">\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\n         </td>\n        </tr>\n        ';
 }) ;
__p += '\n    </tbody>\n</table>\n';
 } ;
__p += '\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\n';
 if (ctx.self.useWebViewCamera) { ;
__p += '\n<div class="fileSelector">\n    <button class="govuk-button" data-module="govuk-button" ref="galleryButton">' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\n    <button class="govuk-button" data-module="govuk-button" ref="cameraButton">' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\n</div>\n';
 } else if (!ctx.self.cameraMode) { ;
__p += '\n<div class="fileSelector" ref="fileDrop">\n    ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\n    ';
 if (ctx.self.imageUpload) { ;
__p += '\n    <a href="#" ref="toggleCameraMode">' +
((__t = (ctx.t('Use Camera,'))) == null ? '' : __t) +
'</a>\n    ';
 } ;
__p += '\n    ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="browse">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\n</div>\n';
 } else { ;
__p += '\n<div>\n    <video class="video" autoplay="true" ref="videoPlayer"></video>\n</div>\n<button class="govuk-button" data-module="govuk-button" ref="takePictureButton">' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\n<button class="govuk-button govuk-button--secondary" data-module="govuk-button" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\n';
 } ;
__p += '\n';
 } ;
__p += '\n<div class="govuk-!-margin-top-2">\n    ';
 ctx.statuses.forEach(function(status) { ;
__p += '\n    <div class="file ' +
((__t = (ctx.statuses.status === 'error' ? ' has-error' : '')) == null ? '' : __t) +
'">\n        <div class="govuk-grid-row">\n            <div class="govuk-grid-column-one-quarter"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-2" ref="fileStatusRemove">Remove</button></div>\n            <div class="fileName govuk-label govuk-grid-column-one-quarter">' +
((__t = (status.originalName)) == null ? '' : __t) +
'</div>\n            <div class="fileSize govuk-label govuk-grid-column-one-quarter">' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'</div>\n            <div class="govuk-grid-column-one-quarter">\n            ';
 if (status.status === 'progress') { ;
__p += '\n                <div class="govuk-label">' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</div>\n            ';
 } else if (status.status === 'error'){ ;
__p += '\n                <div class="govuk-error-message"> ' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\n            ';
 } else { ;
__p += '\n                 <div class="bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\n            ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n    ';
 }) ;
__p += '\n</div>\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\n<div class="govuk-grid-row">\n    <div class="govuk-grid-column-full">\n        <div class="govuk-warning-text">\n            ';
 if (!ctx.component.storage) { ;
__p += '\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\n            <strong class="govuk-warning-text__text">\n                <span class="govuk-warning-text__assistive">Warning</span>\n                ' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'\n            </strong>\n            ';
 } ;
__p += '\n            ';
 if (!ctx.support.filereader) { ;
__p += '\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\n            <strong class="govuk-warning-text__text">\n                <span class="govuk-warning-text__assistive">Warning</span>\n                ' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'\n            </strong>\n            ';
 } ;
__p += '\n            ';
 if (!ctx.support.formdata) { ;
__p += '\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\n            <strong class="govuk-warning-text__text">\n                <span class="govuk-warning-text__assistive">Warning</span>\n                ' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'\n            </strong>\n            ';
 } ;
__p += '\n            ';
 if (!ctx.support.progress) { ;
__p += '\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\n            <strong class="govuk-warning-text__text">\n                <span class="govuk-warning-text__assistive">Warning</span>\n                ' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'\n            </strong>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n</div>\n';
 } ;
__p += '\n';
return __p
}