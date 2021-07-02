from django.db import models
from accounts.models import Account
from .managers import PostManager, PostLocacionManager
# Create your models here.
# def get_upload_path(instance, filename):
#     model = instance.album.model.__class__._meta
#     name = model.verbose_name_plural.replace(' ', '_')
#     return f'{name}/images/{filename}'


# class ImageAlbum(models.Model):
#     def default(self):
#         return self.images.filter(default=True).first()

#     def thumbnails(self):
#         return self.images.filter(width__lt=100, length_lt=100)

def make_thumbnail(image, size):
    img = Image.open(image)
    img.convert('RGB')
    img.thumbnail(size)

    thumb_io = BytesIO()
    img.save(thumb_io, 'JPEG', quality=85)

    thumbnail = File(thumb_io, name=image.name)
    return thumbnail



class Tipo(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class PostLocacion(models.Model):
    titulo = models.CharField(max_length=255, blank=False, null=False)
    lat = models.DecimalField(blank=True, null=True, max_digits=18, decimal_places=15)
    lng = models.DecimalField(blank=True, null=True, max_digits=18, decimal_places=15)

    objects = PostLocacionManager()

    def __str__(self):
        return self.titulo

class PostCategory(models.Model):
    title        = models.CharField(default="", max_length=255)
    created_date = models.DateTimeField(verbose_name='date created', auto_now_add=True, null=True)

    def __str__(self):
        return self.title

class Post(models.Model):
    author               = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="posts")
    tipo                 = models.ForeignKey(Tipo, on_delete=models.PROTECT, related_name="posts")
    categoria            = models.ForeignKey(PostCategory, on_delete=models.PROTECT, related_name="posts")
    locacion             = models.ForeignKey(PostLocacion, on_delete=models.PROTECT, related_name="posts")
    titulo               = models.CharField(max_length=255, blank=False, null=False)
    descripcion          = models.TextField(max_length=255, blank=False, null=False)
    imagen               = models.ImageField(blank=True, null=True, upload_to='posts')
    fecha                = models.DateTimeField(verbose_name='date created', auto_now_add=True, null=True)
    raza                 = models.CharField(max_length=255, blank=False, null=False)
    nombre_mascota       = models.CharField(max_length=255, blank=False, null=False)
    edad_number          = models.IntegerField(default=0, blank=False, null=False)
    edad_unidad          = models.CharField(max_length=255, blank=False, null=False)
    caracteristicas      = models.CharField(max_length=255, blank=False, null=False)
    interaccion_mascotas = models.CharField(max_length=255, blank=False, null=False)
    interaccion_personas = models.CharField(max_length=255, blank=False, null=False)
    vacunas              = models.CharField(max_length=255, blank=False, null=False)
    view_count           = models.IntegerField(default=0)
    esteril              = models.BooleanField(default=False)
    salud                = models.CharField(max_length=255, blank=False, null=False)
    motivo_de_adopcion   = models.BooleanField(default=False)
    motivo_adopcion_text = models.CharField(max_length=255, blank=True, null=True)
    likes                = models.ManyToManyField(Account, related_name='post_likes', blank=True)
    public               = models.BooleanField(default=False)
    draft                = models.BooleanField(default=True)

    objects              = PostManager()


    def __str__(self):
        return self.titulo

class PostImage(models.Model):
    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to='posts')



class Comment(models.Model):
    content = models.CharField(max_length=320)
    account = models.ForeignKey(Account, related_name="comments", on_delete=models.PROTECT, null=True)
    post    = models.ForeignKey(Post, related_name="opinions", on_delete=models.CASCADE)

    def __str__(self):
        return f"({self.post}) {self.follower}: {self.content}."