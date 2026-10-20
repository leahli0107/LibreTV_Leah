/** 网站显示名称。修改环境变量后需要重新构建。 */
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || 'LibreTV_Leah';
export const SITE_DESCRIPTION = `${SITE_NAME}：在线视频搜索与观看平台`;
