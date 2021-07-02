from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('<int:pk>'         , views.AccountDetail.as_view()         , name="account"),
    path('register'         , views.RegisterView.as_view()          , name="register"),
    path('login'            , obtain_auth_token                     , name="login") ,
    path('password/<int:pk>', views.ChangePasswordView.as_view()    , name="change-password"),


    path('image/<int:pk>'   , views.AccountImage.as_view()          , name="image"),
    path('get-id'           , views.getUserID                       , name="get-id"),
    path('get-basic-info'   , views.AccountBasicInfo.as_view()      , name="get-basic-info")
]