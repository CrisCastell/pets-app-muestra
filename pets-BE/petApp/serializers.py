from rest_framework import serializers
from .models import Post, PostCategory, Tipo, PostLocacion
from accounts.models import Account
from accounts.serializers import AccountSerializer, AccountBasicInfoSerializer

class PostListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = [ 'id', 'titulo', 'descripcion', 'imagen']


class PostCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = PostCategory
        fields = '__all__'

class PostLocacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = PostLocacion
        fields = '__all__'

class PostDetailSerializer(serializers.ModelSerializer):
    locacion = PostLocacionSerializer(read_only=True, many=False)
    author   = AccountBasicInfoSerializer(read_only=True, many=False)
    fecha    = serializers.DateTimeField(format='%d %B %Y', read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class TipoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo
        fields = '__all__'


class UpdateImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = ['image']
# class BlogPostSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = BlogPost
#         fields = [ 'id', 'title', 'body', 'image']