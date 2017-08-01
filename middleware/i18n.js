export default function ({
  app,
  store,
  route,
  params,
  error,
  redirect,
  hotReload
}) {
  // If middleware is called from hot-reloading, ignore it
  if (hotReload) return
  // Get locale from params
  const locale = store.state.locale || 'en'
  if (store.state.locales.indexOf(locale) === -1) {
    return error({
      message: 'This page could not be found.',
      statusCode: 404
    })
  }
  // Set locale
  app.i18n.locale = store.state.locale
}
