from django.db import models
from decimal import Decimal

class PostQuerySet(models.query.QuerySet):
    def get_by_category(self, category_name):
        return self.filter(categoria__title=category_name)

    def get_by_tipo(self, tipo_name):
        return self.filter(tipo__title=tipo_name)

    def get_by_location(self, locacion):
        lat = Decimal(locacion['lat']) 
        lng = Decimal(locacion['lng'])
        latStart = lat - Decimal(0.05)
        latEnd   = lat + Decimal(0.05)

        lngStart = lng - Decimal(0.5)
        lngEnd   = lng + Decimal(0.5)

        return self.filter(locacion__lat__range=(latStart, latEnd), locacion__lng__range=(lngStart, lngEnd))


class PostManager(models.Manager):
    def get_queryset(self):
        return PostQuerySet(self.model, using=self._db)

    def get_by_category(self, category_name):
        return self.get_queryset().get_by_category(category_name)

    def get_by_tipo(self, tipo_name):
        return self.get_queryset().get_by_tipo(tipo_name)

    def get_by_location(self, locacion):
        return self.get_queryset().get_by_location(locacion)



class PostLocacionQuerySet(models.query.QuerySet):
    def get_by_category(self, category_name):
        return self.filter(posts__categoria__title=category_name)

    def get_by_tipo(self, tipo_name):
        return self.filter(posts__tipo__title=tipo_name)

    def get_by_location(self, locacion):
        lat = Decimal(locacion['lat']) 
        lng = Decimal(locacion['lng'])
        latStart = lat - Decimal(0.05)
        latEnd   = lat + Decimal(0.05)

        lngStart = lng - Decimal(0.5)
        lngEnd   = lng + Decimal(0.5)

        return self.filter(lat__range=(latStart, latEnd), lng__range=(lngStart, lngEnd))


class PostLocacionManager(models.Manager):
    def get_queryset(self):
        return PostLocacionQuerySet(self.model, using=self._db)

    def get_by_category(self, category_name):
        return self.get_queryset().get_by_category(category_name)

    def get_by_tipo(self, tipo_name):
        return self.get_queryset().get_by_tipo(tipo_name)

    def get_by_location(self, locacion):
        return self.get_queryset().get_by_location(locacion)