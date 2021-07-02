from django.contrib import admin
from .models import PostCategory, Post, PostImage, Tipo, Comment, PostLocacion

# Register your models here.
class PostImageAdmin(admin.StackedInline):
    model = PostImage

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]
    exclude = ('thumbnail',) 
    
    class Meta:
        model = Post

@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(PostCategory)
admin.site.register(Tipo)
admin.site.register(Comment)
admin.site.register(PostLocacion)
# admin.site.register(BlogPostCategory)
# admin.site.register(BlogPost)