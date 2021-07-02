from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import PostListSerializer, PostDetailSerializer, PostCategorySerializer, TipoSerializer, UpdateImageSerializer, PostLocacionSerializer
from .models import Post, PostCategory, Tipo, PostLocacion
from accounts.models import Account
from rest_framework import viewsets, generics
from .pagination import CustomPagination
from .permissions import IsAssigned
from django.db.models import Count
# Create your views here.


class AllPostsList(generics.ListAPIView):
    # queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_classes = [IsAssigned]
    pagination_class = CustomPagination


    def get_queryset(self):
        queryset       = Post.objects.all()
        queryset       = queryset.filter(public=True)
        category_query = self.request.GET.get('category', '').replace('-', ' ')
        tipo_query     = self.request.GET.get('tipo', '').replace('-', ' ')
        quantity       = self.request.GET.get('quantity', '')
        locacion       = {'lat': self.request.GET.get('lat', ''), 'lng': self.request.GET.get('lng', '')}
        

        if category_query != '':
            queryset = queryset.get_by_category(category_query)
        if tipo_query != '':
            queryset = queryset.get_by_tipo(tipo_query)

        queryset = queryset.get_by_location(locacion)


        return queryset


        # if category_query != '' or tipo_query != "":
        #     if category_query != "":
        #         try:
        #             category = PostCategory.objects.get(title=category_query)
        #         except:
        #             category = 0

                
        #         queryset = queryset.filter(categoria=category).order_by('-fecha')

        #     if tipo_query != '':
        #         try:
        #             tipo = Tipo.objects.get(title=tipo_query)
        #         except:
        #             tipo = 0
                
        #         queryset = queryset.filter(tipo=tipo).order_by('-fecha')
        # else:
            
        #     queryset = queryset.order_by('-fecha')
            
        



class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = [IsAssigned]

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.view_count = obj.view_count + 1
        obj.save(update_fields=("view_count", ))
        return super().retrieve(request, *args, **kwargs)


class PostCreate(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = [IsAssigned]


class AllPostCategoriesList(generics.ListAPIView):
    queryset = PostCategory.objects.all()
    serializer_class = PostCategorySerializer
    permission_classes = [IsAssigned]


class AllLocacionesList(generics.ListAPIView):
    serializer_class = PostLocacionSerializer
    permission_classes = [IsAssigned]

    def get_queryset(self):
        queryset = PostLocacion.objects.all()
        locaciones = queryset.filter(posts__public=True)

        category_query = self.request.GET.get('category', '').replace('-', ' ')
        tipo_query     = self.request.GET.get('tipo', '').replace('-', ' ')
        quantity       = self.request.GET.get('quantity', '')
        locacion       = {'lat': self.request.GET.get('lat', ''), 'lng': self.request.GET.get('lng', '')}
        

        if category_query != '':
            locaciones = locaciones.get_by_category(category_query)
        if tipo_query != '':
            locaciones = locaciones.get_by_tipo(tipo_query)

        locaciones = locaciones.get_by_location(locacion)

        return locaciones
        


class AllTiposList(generics.ListAPIView):
    queryset = Tipo.objects.all()
    serializer_class = TipoSerializer
    permission_classes = [IsAssigned]


class FavoritePostsList(generics.ListAPIView):
    
    serializer_class = PostListSerializer
    permission_classes = [IsAssigned]

    def get_queryset(self):
        # queryset = Post.objects.annotate(like_count=Count('likes')).order_by('-like_count')[:3]
        queryset = Post.objects.order_by('-view_count')[:3]
        return queryset



class UpdateImage(generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = UpdateImageSerializer
    permission_classes = [IsAssigned]

class DraftPostsList(generics.ListAPIView):
    serializer_class = PostListSerializer
    permission_classes = [IsAssigned]
    def get_queryset(self):
        queryset       = Post.objects.all()
        queryset       = queryset.filter(draft=True, public=False, author=self.request.user)

        return queryset

class PublicPostsList(generics.ListAPIView):
    serializer_class = PostListSerializer
    permission_classes = [IsAssigned]

    def get_queryset(self):
        queryset       = Post.objects.all()
        queryset       = queryset.filter(public=True, draft=False, author=self.request.user)

        return queryset