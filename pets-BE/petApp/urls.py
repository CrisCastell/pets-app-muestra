from django.urls import path
from . import views

urlpatterns = [
    path('posts'              , views.AllPostsList.as_view()            , name="posts"),
    path('post'               , views.PostCreate.as_view()              , name="create"),
    path('post/<int:pk>'      , views.PostDetail.as_view()              , name="post"),
    path('posts/categories'   , views.AllPostCategoriesList.as_view()   , name="categories"),
    path('posts/tipos'        , views.AllTiposList.as_view()            , name="tipos"),
    path('posts/tendencias'   , views.FavoritePostsList.as_view()       , name="tendencias"),
    path('posts/locaciones'   , views.AllLocacionesList.as_view()       , name="locaciones"),
    path('posts/draft'        , views.DraftPostsList.as_view()          , name="user-draft"),
    path('posts/public'       , views.PublicPostsList.as_view()         , name="user-public"),
 
    # path('blog-posts'        , views.AllBlogPostsList.as_view()  , name="blog-posts"),
    # path('blog-post/'        , views.BlogPostCreate.as_view()    , name="create"),
    # path('blog-post/<int:pk>', views.PostDetail.as_view()        , name="blog-post"),

]