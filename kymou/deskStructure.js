export const defaultDocumentNode = (S, { schemaType }) => {
    if (schemaType === 'blogPost') {
      return S.document().views([
        S.view.form().title('Éditeur d\'Articles'), // 👈 just this
      ])
    }
  
    return S.document().views([S.view.form()])
  }