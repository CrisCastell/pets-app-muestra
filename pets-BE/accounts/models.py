from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.conf import settings
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

# Create your models here.


class MyUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            username=username,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email             = models.EmailField(
                            verbose_name='email address', 
                            max_length=255, 
                            unique=True,
                            )
    username       = models.CharField(max_length=255, blank=False, default="")
    first_name     = models.CharField(max_length=255, blank=True, default="")
    last_name      = models.CharField(max_length=255, blank=True, default="")
    profile_image  = models.ImageField(null=True, blank=True, upload_to='profile_images')
    date_of_birth  = models.DateField(null=True)
    date_joined    = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    is_active      = models.BooleanField(default=True)
    is_admin       = models.BooleanField(default=False)


    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin