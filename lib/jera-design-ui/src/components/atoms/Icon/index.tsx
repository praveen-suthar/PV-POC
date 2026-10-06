import React from 'react';

/**
 * https://getuikit.com/docs/icon#library
 */
type Name = App | Devices | Storage | Direction | Editor | Brands

type App = 'home' | 'sign-in' | 'sign-out' | 'user' | 'users' | 'lock' | 'unlock' | 'settings' | 'cog' | 'nut' | 'comment' | 'commenting' | 'comments' | 'hashtag' | 'tag' | 'cart' | 'credit-card' | 'mail' | 'receiver' | 'print' | 'search' | 'location' | 'bookmark' | 'code' | 'paint-bucket' | 'camera' | 'video-camera' | 'bell' | 'microphone' | 'bolt' | 'star' | 'heart' | 'happy' | 'lifesaver' | 'rss' | 'social' | 'git-branch' | 'git-fork' | 'world' | 'calendar' | 'clock' | 'history' | 'future' | 'pencil' | 'trash' | 'move' | 'link' | 'question' | 'info' | 'warning' | 'image' | 'thumbnails' | 'table' | 'list' | 'menu' | 'grid' | 'more' | 'more-vertical' | 'plus' | 'plus-circle' | 'minus' | 'minus-circle' | 'close' | 'check' | 'ban' | 'refresh' | 'play' | 'play-circle'

type Devices = 'tv' | 'desktop' | 'laptop' | 'tablet' | 'phone' | 'tablet-landscape' | 'phone-landscape'

type Storage = 'file' | 'file-text' | 'file-pdf' | 'copy' | 'file-edit' | 'folder' | 'album' | 'push' | 'pull' | 'server' | 'database' | 'cloud-upload' | 'cloud-download' | 'download' | 'upload'

type Direction = 'reply' | 'forward' | 'expand' | 'shrink' | 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'chevron-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-double-left' | 'chevron-double-right' | 'triangle-up' | 'triangle-down' | 'triangle-left' | 'triangle-right'

type Editor = 'bold' | 'italic' | 'strikethrough' | 'quote-right'

type Brands = '500px' | 'behance' | 'dribbble' | 'etsy' | 'facebook' | 'flickr' | 'foursquare' | 'github' | 'github-alt' | 'gitter' | 'google' | 'google-plus' | 'instagram' | 'joomla' | 'linkedin' | 'pagekit' | 'pinterest' | 'reddit' | 'soundcloud' | 'tripadvisor' | 'tumblr' | 'twitter' | 'uikit' | 'vimeo' | 'whatsapp' | 'wordpress' | 'xing' | 'yelp' | 'youtube'

type Props = {
  name: Name,
  ratio?: number,
}

/**
 * See: https://getuikit.com/docs/icon
 */
export const Icon = (
  ({ name, ratio }) => <span uk-icon={`icon: ${name}; ${ratio ? `ratio:${ratio}` : ''}`} />
) as React.FC<Props>;
