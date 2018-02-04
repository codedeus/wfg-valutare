(function () {
  'use strict';
  angular.module('fuse')
    .factory('StoreService', StoreService);


  StoreService.$inject = ['$http', '$q','AppConstants'];

  function StoreService($http, $q, AppConstants) {

    if (window.JSON && !window.JSON.dateParser) {
      var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
      var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
      JSON.dateParser = function (key, value) {
          if (typeof value === 'string') {
              var a = reISO.exec(value);
              if (a)
                  return new Date(value);
              a = reMsAjax.exec(value);
              if (a) {
                  var b = a[1].split(/[-+,.]/);
                  return new Date(b[0] ? +b[0] : 0 - +b[1]);
              }
          }
          return value;
      };
    }

    var service = {
      SeedTable: SeedTable,
      GetAllRows: GetAllRows,
      AddRows: AddRows,
      GetPatientBySearchText: GetPatientBySearchText,
      UpdatePatient: UpdatePatient,
      SetNumber: SetNumber,
      GetPatientById: GetPatientById,
      GetBillNumberSearchText: GetBillNumberSearchText,
      UpdateGender: UpdateGender,
      DeleteRow: DeleteRow,
      GetDepartmentBySearchText: GetDepartmentBySearchText,
      GetBedsByWardId: GetBedsByWardId,
      GetAllBeds: GetAllBeds,
      UpdateBed: UpdateBed,
      GetShifts: GetShifts,
      GetSellableItemsBySearchText: GetSellableItemsBySearchText,
      DischargePatient: DischargePatient,
      GetBillsByEncounterId: GetBillsByEncounterId,
      UpdateSale: UpdateSale,
      GetDepartmentByDepartmentCode: GetDepartmentByDepartmentCode,
      GetPatientOnAdmission: GetPatientOnAdmission,
      GetRevenueDepartmentBySearchText: GetRevenueDepartmentBySearchText,
      UpdateSaleEntry: UpdateSaleEntry,
      GetBillsByBillId: GetBillsByBillId,
      GetSaleReceiptBySearchText: GetSaleReceiptBySearchText,
      UpdateSaleReceipt: UpdateSaleReceipt,
      VerifyUser: VerifyUser,
      GetAssesibleModules: GetAssesibleModules,
      UpdateStaffDetail: UpdateStaffDetail,
      GetGlobalConstants: GetGlobalConstants,
      GetSchemes: GetSchemes,
      GetSchemeTypes: GetSchemeTypes,
      GetSelectedSchemeType: GetSelectedSchemeType,


      UpdateGlobalConstant: UpdateGlobalConstant,
      GetIndexBySearchText: GetIndexBySearchText,
      GetCodingandIndexing: GetCodingandIndexing,
      UpdateWorkShift: UpdateWorkShift,
      GetShift_SaleRecipt: GetShift_SaleRecipt,
      GetShift_DepositReceipt: GetShift_DepositReceipt,
      GetDepartmentByRevDepartmentCode: GetDepartmentByRevDepartmentCode,
      GetDepositDepartment: GetDepositDepartment,
      GetStaffMemberBySearchText: GetStaffMemberBySearchText,
      GetCompiledShifts: GetCompiledShifts,
      GetShiftsForSurveillanve: GetShiftsForSurveillanve,
      GetPharmacyItems: GetPharmacyItems,
      UpdatePharmacyItem: UpdatePharmacyItem,
      GetSupplierBySearchText: GetSupplierBySearchText,
      UpdateSupplier: UpdateSupplier,
      GetPharamcyItemSuppliers: GetPharamcyItemSuppliers,
      GetPharmacyItemsForReconciliation: GetPharmacyItemsForReconciliation,
      GetPharmacyItemsForIssuanceAndRequisition: GetPharmacyItemsForIssuanceAndRequisition,
      UpdateRequisition: UpdateRequisition,
      UpdateRequisitionEntries: UpdateRequisitionEntries,
      GetDrugRequisitions: GetDrugRequisitions,
      GetDrugRequisitionEntries: GetDrugRequisitionEntries,
      GetSaleEntriessByReceiptId: GetSaleEntriessByReceiptId,
      DispenseDrugs: DispenseDrugs,
      GetRegisteredDrugs: GetRegisteredDrugs,
      GetStockBalancePerOutlet: GetStockBalancePerOutlet,
      GetExpiredDrugNotification: GetExpiredDrugNotification,
      GetDrugIssuanceCodes: GetDrugIssuanceCodes,
      GetDrugIssuanceEntries: GetDrugIssuanceEntries,
      GetDamagedDrugCodes: GetDamagedDrugCodes,
      GetDamagedDrugEntries: GetDamagedDrugEntries,
      GetReceivedItemCodes: GetReceivedItemCodes,
      GetReceivedSupplies: GetReceivedSupplies,
      GetOutletActivityReport: GetOutletActivityReport,
      UpdateObjectId: UpdateObjectId,

      GetNursesWaitingList: GetNursesWaitingList,
      UpdateEncounter: UpdateEncounter,
      GetDoctorsWaitingList: GetDoctorsWaitingList,
      GetPatientDetailsByEncounterId: GetPatientDetailsByEncounterId,
      GetTestParameters: GetTestParameters,
      UpdateParameter: UpdateParameter,
      UpdateSaleEntries: UpdateSaleEntries,
      GetWardDetails: GetWardDetails,
      GetRegisteredPatients: GetRegisteredPatients,
      GetPatientAdmsissionDetails: GetPatientAdmsissionDetails,
      GetStates: GetStates,
      GetSpecimenCollectionStatus: GetSpecimenCollectionStatus,
      SubmitSampleCollection: SubmitSampleCollection,
      GetTemplateAssignment: GetTemplateAssignment,
      EditTemplateAssignment: EditTemplateAssignment,
      GetServiceRequest: GetServiceRequest,
      GetPreparedResult: GetPreparedResult,
      UpdateLabResult: UpdateLabResult,
      UpdateLabResultEntry: UpdateLabResultEntry,
      GetLabResults: GetLabResults,
      GetLabResult: GetLabResult,
      SubmitVerificationData: SubmitVerificationData,
      GetLabResultForView: GetLabResultForView,
      GetDefaultLocation: GetDefaultLocation,
      UpdateWardStay: UpdateWardStay,
      FinalizeAndUnfinalizeBills: FinalizeAndUnfinalizeBills,
      GetHospitalScheme: GetHospitalScheme,
      GetPatientEncounters: GetPatientEncounters,
      GetDrugFlowEntries: GetDrugFlowEntries,
      GetRequestStatus: GetRequestStatus,
      GetPharmacistActivity: GetPharmacistActivity,
      GetDrugWithdrawals: GetDrugWithdrawals,
      GetDrugWithdrawalCodes: GetDrugWithdrawalCodes,
      GetShiftCompilationNumberBySearchText: GetShiftCompilationNumberBySearchText,
      GetPosWorkshiftBySearchText: GetPosWorkshiftBySearchText,
      GetPendingRadiologyRequests: GetPendingRadiologyRequests,
      GetRadiologyRequests: GetRadiologyRequests,
      GetDailyCashReportForServices: GetDailyCashReportForServices,
      CancelReceipt: CancelReceipt,
      GetDepositReceiptBySearchText: GetDepositReceiptBySearchText,
      GetOldPatients: GetOldPatients,
      GetRevisits: GetRevisits,
      GetNewPatients: GetNewPatients,
      GetShiftsForCompilation: GetShiftsForCompilation,
      GetCompiledShifts_DepositCollection: GetCompiledShifts_DepositCollection,
      GetCompiledShifts_SaleCollection: GetCompiledShifts_SaleCollection,
      GetDrugReturnCodes: GetDrugReturnCodes,
      GetPatientDrugReturnEntries: GetPatientDrugReturnEntries,
      UpdateXrayResult: UpdateXrayResult,
      GetPreparedResults: GetPreparedResults,
      GetPreparedRadiologyRequestsByPatientId: GetPreparedRadiologyRequestsByPatientId,
      GetSchemeDiscountUpdates: GetSchemeDiscountUpdates,
      GetReceiptListing: GetReceiptListing,
      GetDepositListing: GetDepositListing,
      GetReceiptDetails: GetReceiptDetails,
      GetWalkinPatientReceiptDetails: GetWalkinPatientReceiptDetails,
      GetDischargedPatients: GetDischargedPatients,
      CheckforSuperadmin: CheckforSuperadmin,
      GetReceiptDetailsByReceiptId: GetReceiptDetailsByReceiptId,
      GetSaleReceiptForDrugItems: GetSaleReceiptForDrugItems,
      GetPatientForAdmission: GetPatientForAdmission,
      GetLabResultBySearchText: GetLabResultBySearchText,
      GetFreeBedsBeds: GetFreeBedsBeds,
      GetAllOpenEncounters: GetAllOpenEncounters,
      GetConsultationTemplates: GetConsultationTemplates,
      GetClientData: GetClientData,
      GetWorkShift: GetWorkShift,
      PingServer: PingServer,
      GetAllReligion:GetAllReligion,
      SaveUpdates:SaveUpdates,
      UpdateClientData:UpdateClientData,
      GetPatientDiagnosis:GetPatientDiagnosis,
      UpdateSellableItem:UpdateSellableItem,
      getPatientBills:getPatientBills,
      backupDb:backupDb,
      restoreDb:restoreDb,
      checkIfPatientIsOnAdmission:checkIfPatientIsOnAdmission
    };

    return service;

    function createGuid() {
      var d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }

    function SeedTable(tableName) {
      var url = "app/data/emr/patientregistration/" + tableName + ".json";

      $http.get(url).then(
        function (response) {

          lovefield.getDB().then(function (db) {
            var table = db.getSchema().table(tableName);

            db.select().from(table).exec().then(
              function (rows) {
                if (rows.length == 0) {

                  var rowz = response.data.map(function (obj) {
                    return table.createRow(obj);
                  });

                  db.insertOrReplace().into(table).values(rowz).exec()
                    .then(function (reply) {
                      console.log(reply);
                    }).catch(function (error) {
                      console.log(error);
                    });
                }
              });
          });
        });
    }

    function GetAllRows(isDrug, tableName, lastUpdated) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);

        var department = db.getSchema().table('Department');

        var query = db.select()
          .from(table)

        if (tableName == 'Patient') {
          var gender = db.getSchema().table('Gender');
          var maritalState = db.getSchema().table('MaritalState');
          var religion = db.getSchema().table('Religion');
          var currentBed = db.getSchema().table('Bed');
          var currentWard = db.getSchema().table('Department');
          var schemeMembership = db.getSchema().table('SchemeMembership');
          var scheme = db.getSchema().table('Scheme');
          var encounter = db.getSchema().table('Encounter');
          var wardStay = db.getSchema().table('WardStayHistory');
          var schemePlansTable = db.getSchema().table('SchemePlans');
          var vitalSignsTable = db.getSchema().table('VitalSigns');

          query = query.innerJoin(gender, table.GenderId.eq(gender.Id)).
            innerJoin(maritalState, table.MaritalStateId.eq(maritalState.Id)).
            leftOuterJoin(encounter, table.Id.eq(encounter.PatientId)).
            leftOuterJoin(wardStay, encounter.Id.eq(wardStay.EncounterId)).
            leftOuterJoin(schemeMembership, table.Id.eq(schemeMembership.PatientId)).
            leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
            leftOuterJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id)).
            leftOuterJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id)).
            leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
            leftOuterJoin(religion, table.ReligionId.eq(religion.Id)).
            leftOuterJoin(vitalSignsTable,encounter.Id.eq(vitalSignsTable.EncounterId)).
            orderBy(encounter.LocalId, lf.Order.DESC);
        }

        if (tableName == 'Bed') {
          query = query.innerJoin(department, table.DepartmentId.eq(department.Id));
        }

        if (tableName == 'SellableItem') {
          var revenueDepartment = db.getSchema().table('RevenueDepartment');


          query = query.leftOuterJoin(department, table.ServiceDepartmentId.eq(department.Id)).
            leftOuterJoin(revenueDepartment, table.RevenueDepartmentId.eq(revenueDepartment.Id));

          isDrug = isDrug == undefined ? false : isDrug;
          query.where(lf.op.and(table.IsDeleted.eq(false), table.IsDrug.eq(isDrug)))
            .exec()
            .then(
            function (rows) {
              deferred.resolve(rows);
            });
        } else {
          query.where(table.IsDeleted.eq(false))
            .exec()
            .then(
            function (rows) {

              if (tableName == 'Patient') {
                rows = _.uniqBy(rows, 'Patient.LocalId'); //joining with encounter table produces multiple tables.
              }
              deferred.resolve(rows);
            });
        }
      });
      return deferred.promise;
    }

    function GetPatientDiagnosis(encounterId){
      var deferred = $q.defer();
      lovefield.getDB().then(function(db){
      //  var encounterTable = db.getSchema().table('Encounter');
        var consultationTable = db.getSchema().table("Consultations");
        var diagnosisEntriesTable = db.getSchema().table('DiagnosisEntries');

        db.select()
        .from(diagnosisEntriesTable)
        .innerJoin(consultationTable,diagnosisEntriesTable.ConsultationId.eq(consultationTable.Id))
       // .innerJoin(encounterTable,consultationTable)
       .where(
         lf.op.and(
          consultationTable.EncounterId.eq(encounterId),
          diagnosisEntriesTable.IsDeleted.eq(false)
         )
       ).exec().then(function(diagnosis){
          deferred.resolve(diagnosis);
       });
      });
      return deferred.promise;
    }



    function GetPatientForAdmission() {
      var deferred = $q.defer();
      var date = new Date();
      var today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');
        var encounterTable = db.getSchema().table('Encounter');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var scheme = db.getSchema().table('Scheme');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var wardStayTable = db.getSchema().table("WardStayHistory");
        var currentBed = db.getSchema().table('Bed');
        //var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(patientTable).

          innerJoin(gender, patientTable.GenderId.eq(gender.Id)).
          innerJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
          leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
          innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
          leftOuterJoin(wardStayTable, encounterTable.Id.eq(wardStayTable.EncounterId)).
          leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
          leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
          leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
          leftOuterJoin(currentBed, wardStayTable.NewBedId.eq(currentBed.Id)).
          orderBy(encounterTable.LocalId, lf.Order.DESC).
          where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            encounterTable.StartDate.gte(today),
            lf.op.or(
              currentBed.Id.eq(null),
              currentBed.IsOccupied.eq(false)
            ),

            lf.op.or(
              wardStayTable.Id.eq(null),
              wardStayTable.IsDischarged.eq(true)
            )
          )
          ).exec().then(function (patients) {

            var uniquePatients = _.uniqBy(patients, 'Patient.LocalId');

            deferred.resolve(uniquePatients);
          });
      });
      return deferred.promise;
    }

    function AddRows(rows, tableName, clientId) {
      var deferred = $q.defer();

      //var tempTableId = createGuid();
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        rows.IsActive = true;
        rows.IsDeleted = false;
        rows.CreationDate = new Date();
        rows.ObjectName = tableName;
        rows.LastModifiedDate = new Date();
        rows.LastSynchTime = rows.LastSynchTime != null ? new Date(rows.LastSynchTime) : null;
        rows.Id = createGuid();

        var row = table.createRow(rows);

        db.insertOrReplace()
          .into(table)
          .values([row])
          .exec()
          .then(
          function (newEntries) {
            var updatedEntryId = clientId + '0' + newEntries[0].LocalId;

            db.update(table).
              set(table.Id, (updatedEntryId)).
              where(
              table.LocalId.eq(newEntries[0].LocalId)).
              exec().then(function () {
                newEntries[0].Id = updatedEntryId;
                deferred.resolve(newEntries[0]);
              });
          });

      });
      return deferred.promise;
    }

    // function UpdateSchemeMembership(schemeMembership) {

    //     var deferred = $q.defer();

    //     lovefield.getDB().then(function(db) {

    //         var table = db.getSchema().table('SchemeMembership');


    //         db.update(table).
    //         set(table.Percentage, schemeMembership.Percentage).

    //         set(table.SchemePlansId, schemeMembership.SchemePlansId).
    //         set(table.MemberType, schemeMembership.MemberType).
    //         set(table.CardHolderName, schemeMembership.CardHolderName).
    //         set(table.CardHolderInsuranceNumber, schemeMembership.CardHolderInsuranceNumber).
    //         set(table.BeneficiaryName, schemeMembership.BeneficiaryName).
    //         set(table.LastModifiedDate, new Date()).
    //         set(table.RelationshipWithCardHolderId, schemeMembership.RelationshipWithCardHolderId).

    //         where(
    //             table.Id.eq(schemeMembership.Id)).
    //         exec().then(
    //             function() {
    //                 deferred.resolve();
    //             });
    //     });
    //     return deferred.promise;
    // }




    function UpdatePatient(patient) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('Patient');

        db.update(table).
          set(table.PatientCategory, patient.PatientCategory).
          set(table.Surname, patient.Surname).
          set(table.StateId, patient.StateId).
          set(table.OtherNames, patient.OtherNames).
          set(table.PhoneNumber, patient.PhoneNumber).
          set(table.GenderId, patient.GenderId).
          set(table.Email, patient.Email).
          set(table.DateOfBirth, patient.DateOfBirth).
          set(table.NextOfKinName, patient.NextOfKinName).
          set(table.MaritalStateId, patient.MaritalStateId).
          set(table.NextOfKinAddress, patient.NextOfKinAddress).
          set(table.ReligionId, patient.ReligionId).
          set(table.NextOfKinPhoneNumber, patient.NextOfKinPhoneNumber).
          set(table.EthnicGroup, patient.EthnicGroup).
          set(table.ResidentialAddress, patient.ResidentialAddress).
          set(table.RelationshipWithNokId, patient.RelationshipWithNokId).
          set(table.HospitalTransferredFrom, patient.HospitalTransferredFrom).
          set(table.DateOfTransfer, patient.DateOfTransfer).
          set(table.ReferralAuthorizedBy, patient.ReferralAuthorizedBy).
          set(table.ReasonForTransfer, patient.ReasonForTransfer).
          set(table.HighestEducationalQualification, patient.HighestEducationalQualification).
          set(table.Occupation, patient.Occupation).
          set(table.AccomodationType, patient.AccomodationType).
          set(table.HasAccessToTelephone, patient.HasAccessToTelephone).
          set(table.HasAccessToInternet, patient.HasAccessToInternet).
          set(table.HasAccessToElectricity, patient.HasAccessToElectricity).
          set(table.HasAccessToCleanWater, patient.HasAccessToCleanWater).
          set(table.IsLocalityHostile, patient.IsLocalityHostile).
          set(table.IsAParent, patient.IsAParent).
          set(table.HoursSpentWithFamilyPerDay, patient.HoursSpentWithFamilyPerDay).
          set(table.InvolvesSpouseInFamilyDecisionMaking, patient.InvolvesSpouseInFamilyDecisionMaking).
          set(table.FamilyAffectionLevel, patient.FamilyAffectionLevel).
          set(table.HasEverSufferedDomesticViolence, patient.HasEverSufferedDomesticViolence).
          set(table.WasImpregnatedAsATeenager, patient.WasImpregnatedAsATeenager).
          set(table.HasEverBeenInPrison, patient.HasEverBeenInPrison).
          set(table.HasEverBeenAbusedAsAChild, patient.HasEverBeenAbusedAsAChild).
          set(table.HasEverWithdrawnFromSchool, patient.HasEverWithdrawnFromSchool).
          set(table.HasAnyAddiction, patient.HasAnyAddiction).
          set(table.HasEverBeenSexuallyAbused, patient.HasEverBeenSexuallyAbused).
          set(table.DoesExercise, patient.DoesExercise).
          set(table.TakesCoffee, patient.TakesCoffee).
          set(table.TakesSoftDrink, patient.TakesSoftDrink).
          set(table.CurrentlyOnDiet, patient.CurrentlyOnDiet).
          set(table.DietPlan, patient.DietPlan).
          set(table.LastModifiedDate, new Date()).
          set(table.ExerciseMinutesPerDay, patient.ExerciseMinutesPerDay).
          set(table.CoffeeCupsPerDay, patient.CoffeeCupsPerDay).
          set(table.SoftDrinkBottlesPerDay, patient.SoftDrinkBottlesPerDay).
          set(table.EatsHighCholesterolFood, patient.EatsHighCholesterolFood).
          set(table.HoursOfSleepPerDay, patient.HoursOfSleepPerDay).
          set(table.TakesSleepingMedications, patient.TakesSleepingMedications).
          set(table.HasSufferedSleepDisorder, patient.HasSufferedSleepDisorder).
          set(table.SleepDisorderDetails, patient.SleepDisorderDetails).
          set(table.RhesusFactorId, patient.RhesusFactorId).
          set(table.GenotypeId, patient.GenotypeId).
          set(table.BloodTypeId, patient.BloodTypeId).
          where(
          table.Id.eq(patient.Id)).
          exec().then(
          function () {
            deferred.resolve();
          });
      });
      return deferred.promise;
    }

    function SetNumber(row, newNumber, tableName) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        db.update(table).
          set(table.Number, (newNumber)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(row.Id)
          ).
          exec();
      });
    }

    function UpdateRequisitionEntries(row, tableName) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        db.update(table).
          set(table.Quantity, (row.Quantity)).
          set(table.IssuedBy, (row.IssuedBy)).
          set(table.IsGranted, (row.IsGranted)).
          set(table.IssuanceDate, (new Date())).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(row.Id)
          ).
          exec();
      });
    }

    function UpdateRequisition(row, tableName) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        db.update(table).
          set(table.IssuanceNumber, (row.IssuanceNumber)).

          set(table.IsGranted, (row.IsGranted)).
          set(table.IssuanceDate, (new Date())).
          set(table.IssuedBy, (row.IssuedBy)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(row.Id)
          ).
          exec();
      });
    }

    function GetDrugRequisitions(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var drugRequisitionTable = db.getSchema().table('DrugRequisition');

        var requestingStaffTable = db.getSchema().table('StaffMember').as('RequestingStaff');
        var issuingStaffTable = db.getSchema().table('StaffMember').as('IssuingStaff');

        db.select(drugRequisitionTable.Number.as('RequisitionNumber'), drugRequisitionTable.IssuanceNumber.as('IssuanceNumber'),
          requestingStaffTable.Username.as('RaisedBy'), issuingStaffTable.Username.as('IssuedBy'), drugRequisitionTable.RequestDate.as('RequestDate'), drugRequisitionTable.IssuanceDate.as('IssuanceDate'),
          drugRequisitionTable.IsGranted.as('IsGranted'), drugRequisitionTable.Id.as('Id'))
          .from(drugRequisitionTable)

          .leftOuterJoin(requestingStaffTable, drugRequisitionTable.RaisedBy.eq(requestingStaffTable.Id))
          .leftOuterJoin(issuingStaffTable, drugRequisitionTable.IssuedBy.eq(issuingStaffTable.Id))
          .where(
          lf.op.and(
            drugRequisitionTable.IsDeleted.eq(false),
            //  drugRequisitionTable.IssuingOutletId.eq(issuingOutletId),
            //   drugRequisitionTable.IsRequisition.eq(true),
            lf.op.or(
              drugRequisitionTable.RequestDate.between(startDate, endDate),
              drugRequisitionTable.IssuanceDate.between(startDate, endDate)
            )
          )
          ).exec()
          .then(function (requisitions) {
            deferred.resolve(requisitions);
          });
      });
      return deferred.promise;
    }



    function GetPatientBySearchText(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var patientTable = db.getSchema().table('Patient');

        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');
        var encounter = db.getSchema().table('Encounter');
        var wardStay = db.getSchema().table('WardStayHistory');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var scheme = db.getSchema().table('Scheme');
        var currentBed = db.getSchema().table('Bed');
        var oldBed = db.getSchema().table('Bed').as('OldBed');
        var currentWard = db.getSchema().table('Department');
        var oldWard = db.getSchema().table('Department').as('OldWard');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(patientTable).

          innerJoin(gender, patientTable.GenderId.eq(gender.Id)).
          innerJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
          leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
          leftOuterJoin(encounter, patientTable.Id.eq(encounter.PatientId)).
          leftOuterJoin(wardStay, encounter.Id.eq(wardStay.EncounterId)).
          leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
          leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
          leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
          leftOuterJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id)).
          leftOuterJoin(oldBed, wardStay.OldBedId.eq(oldBed.Id)).
          leftOuterJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id)).
          leftOuterJoin(oldWard, oldBed.DepartmentId.eq(oldWard.Id)).
          orderBy(encounter.LocalId, lf.Order.DESC).
          where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            // currentBed.IsOccupied.eq(true),
            lf.op.or(
              patientTable.Number.match(searchTextMatcher),
              patientTable.Surname.match(searchTextMatcher),
              patientTable.OtherNames.match(searchTextMatcher)
              //  currentBed.IsOccupied.eq(true)
            )
          )
          ).exec().
          then(function (patients) {

            var uniquePatients = _.uniqBy(patients, 'Patient.LocalId');
            deferred.resolve(uniquePatients);
          });
      });
      return deferred.promise;
    }

    function GetAllReligion() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var religionTable = db.getSchema().table('Religion');

        db.select().
          from(religionTable).
          where(
            religionTable.IsDeleted.eq(false)
          ).
          exec().
          then(function (religions) {
            deferred.resolve(religions);
          });
      });
      return deferred.promise;
    }


    function GetStaffMemberBySearchText(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var staffMemberTable = db.getSchema().table('StaffMember');
        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(staffMemberTable).
          where(
          lf.op.and(
            staffMemberTable.IsDeleted.eq(false),
            lf.op.or(
              staffMemberTable.LastName.match(searchTextMatcher),
              staffMemberTable.OtherNames.match(searchTextMatcher),
              staffMemberTable.Username.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (staffMembers) {
            deferred.resolve(staffMembers);
          });
      });
      return deferred.promise;
    }



    function GetDepartmentBySearchText(searchText, category) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('Department');

        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(departmentTable).
          where(
          lf.op.and(
            departmentTable.IsDeleted.eq(false),
            lf.op.or(
              departmentTable.Name.match(searchTextMatcher),
              departmentTable.Code.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (departments) {
            if (category != '' && category !== null) {
              departments = departments.filter(function (department) { return department.Category === category; });
            }
            deferred.resolve(departments);
          });
      });
      return deferred.promise;
    }

    function GetPharamcyItemSuppliers(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var supplierRegisterTable = db.getSchema().table('SupplierRegister');

        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(supplierRegisterTable).
          where(
          lf.op.and(
            supplierRegisterTable.IsDeleted.eq(false),
            lf.op.or(
              supplierRegisterTable.SupplierName.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (suppliers) {
            deferred.resolve(suppliers);
          });
      });
      return deferred.promise;
    }

    function GetSupplierBySearchText(searchText) {

      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var supplierRegisterTable = db.getSchema().table('SupplierRegister');


        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(supplierRegisterTable)

          .where(
          lf.op.and(
            supplierRegisterTable.IsDeleted.eq(false),
            supplierRegisterTable.SupplierName.match(searchTextMatcher)
          )
          ).exec().
          then(function (supplier) {
            deferred.resolve(supplier);
          });
      });
      return deferred.promise;
    }

    function GetIndexBySearchText(searchText, tableName) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var indexTable = db.getSchema().table(tableName);
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(indexTable).
          where(
          lf.op.and(
            indexTable.IsDeleted.eq(false),
            lf.op.or(
              indexTable.Name.match(searchTextMatcher),
              indexTable.Code.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (indecies) {
            deferred.resolve(indecies);
          });
      });
      return deferred.promise;
    }


    function GetRevenueDepartmentBySearchText(searchText) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var departmentTable = db.getSchema().table('RevenueDepartment');
        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(departmentTable).
          where(
          lf.op.and(
            departmentTable.IsDeleted.eq(false),
            lf.op.or(
              departmentTable.Name.match(searchTextMatcher),
              departmentTable.Code.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (departments) {
            deferred.resolve(departments);
          });
      });
      return deferred.promise;
    }

    function GetPharmacyItemsForReconciliation(pharmacyOutletId, searchText) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('Department');
        var sellableItemTable = db.getSchema().table('SellableItem');

        var sellableItemDispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var drugformulationTable = db.getSchema().table('DrugFormulation');

        var searchTextMatcher = new RegExp(searchText, "i");

        db.select()
          .from(sellableItemTable)

          .leftOuterJoin(sellableItemDispatchLogTable, sellableItemTable.Id.eq(sellableItemDispatchLogTable.SellableItemId))
          .leftOuterJoin(departmentTable, sellableItemDispatchLogTable.DepartmentId.eq(departmentTable.Id))

          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .where(
          lf.op.and(
            sellableItemTable.IsDeleted.eq(false),
            sellableItemTable.IsActive.eq(true),
            sellableItemTable.IsDrug.eq(true),
            sellableItemDispatchLogTable.DepartmentId.eq(pharmacyOutletId),
            lf.op.or(
              sellableItemTable.Name.match(searchTextMatcher),
              sellableItemTable.BrandName.match(searchTextMatcher),
              sellableItemTable.Code.match(searchTextMatcher)
            )
          )
          ).exec().then(function (pharmacyItems) {
            deferred.resolve(pharmacyItems);
          });

      });
      return deferred.promise;
    }

    function GetExpiredDrugNotification(startDate, endDate) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {


        var supplyBatchTable = db.getSchema().table('SupplyBatch');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var supplyTable = db.getSchema().table('Supply');

        db.select(supplyBatchTable.ExpiryDate.as('ExpiryDate'), sellableItemTable.Name.as('Name'), sellableItemTable.BrandName.as('BrandName'),
          supplyTable.InvoiceNumber.as('InvoiceNumber'), supplyBatchTable.BatchNumber.as('BatchNumber')).from(supplyBatchTable)

          .innerJoin(sellableItemTable, supplyBatchTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(supplyTable, supplyBatchTable.SupplyId.eq(supplyTable.Id))
          .where(
          lf.op.and(
            supplyBatchTable.IsDeleted.eq(false),
            supplyBatchTable.ExpiryDate.between(startDate, endDate)
          )
          ).exec().then(function (supplyBatch) {
            deferred.resolve(supplyBatch);
          });
      });
      return deferred.promise;
    }

    function GetDrugIssuanceCodes(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        //  var sellableItemTable = db.getSchema().table('SellableItem');
        var drugRequisitionTable = db.getSchema().table('DrugRequisition');
        // var drugRequisitionEntriesTable = db.getSchema().table('DrugRequisitionEntries');
        // var issuingOutletTable = db.getSchema().table('Department').as('IssuingOutlet');
        // var receivingOutletTable = db.getSchema().table('Department').as('ReceivingOutlet');
        // var searchTextMatcher = new RegExp(searchText, "i");

        db.select().from(drugRequisitionTable)

          // .innerJoin(drugRequisitionEntriesTable,drugRequisitionTable.Id.eq(drugRequisitionEntriesTable.DrugRequisitionId))
          // .innerJoin(sellableItemTable,drugRequisitionEntriesTable.SellableItemId.eq(sellableItemTable.Id))
          // .innerJoin(issuingOutletTable,drugRequisitionEntriesTable.IssuingOutletId.eq(issuingOutletTable.Id))
          // .innerJoin(receivingOutletTable,drugRequisitionEntriesTable.ReceivingOutletId.eq(receivingOutletTable.Id))
          .where(
          lf.op.and(
            drugRequisitionTable.IsDeleted.eq(false),
            drugRequisitionTable.IsGranted.eq(true),
            drugRequisitionTable.IssuanceNumber.neq(null),
            drugRequisitionTable.IssuanceDate.between(startDate, endDate)
          )
          ).exec().then(function (drugRequisitions) {
            deferred.resolve(drugRequisitions);
          });
      });
      return deferred.promise;
    }

    function GetDamagedDrugCodes(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {


        var damagedDrugTable = db.getSchema().table('DamagedDrugCapture');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().from(damagedDrugTable)

          .where(
          lf.op.and(
            damagedDrugTable.IsDeleted.eq(false),
            damagedDrugTable.Number.match(searchTextMatcher)
          )
          ).exec().then(function (damagedDrugs) {
            deferred.resolve(damagedDrugs);
          });
      });
      return deferred.promise;
    }

    function GetDrugReturnCodes(searchText) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {


        var drugReturnTable = db.getSchema().table('DrugReturn');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().from(drugReturnTable)

          .innerJoin(encounterTable, drugReturnTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .where(
          lf.op.and(
            drugReturnTable.IsDeleted.eq(false),
            drugReturnTable.Number.match(searchTextMatcher)
          )
          ).exec().then(function (drugReturns) {

            var uniqueReturns = _.uniqBy(drugReturns, 'DrugReturn.LocalId');
            deferred.resolve(uniqueReturns);
          });
      });
      return deferred.promise;
    }

    function GetReceivedItemCodes(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {


        var supplyTable = db.getSchema().table('Supply');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().from(supplyTable)

          .where(
          lf.op.and(
            supplyTable.IsDeleted.eq(false),
            supplyTable.Number.match(searchTextMatcher)
          )
          ).exec().then(function (supplies) {
            deferred.resolve(supplies);
          });
      });
      return deferred.promise;
    }


    function GetDamagedDrugEntries(captureCode) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var sellableItemTable = db.getSchema().table('SellableItem');
        var outletTable = db.getSchema().table('Department');
        var staffMemberTable = db.getSchema().table('StaffMember');
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');

        db.select(sellableItemTable.Name.as('Name'), sellableItemTable.BrandName.as('BrandName'), outletTable.Name.as('OutletName'), dispatchLogTable.Number.as('Number'),
          dispatchLogTable.Date.as('Date'), dispatchLogTable.Quantity.as('Quantity'), staffMemberTable.OtherNames.as('OtherNames'), staffMemberTable.LastName.as('LastName'))
          .from(dispatchLogTable)

          .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(outletTable, dispatchLogTable.DepartmentId.eq(outletTable.Id))
          .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
          .where(
          lf.op.and(
            dispatchLogTable.IsDeleted.eq(false),
            dispatchLogTable.Number.eq(captureCode)
          )
          ).exec().then(function (damageddrugentries) {
            deferred.resolve(damageddrugentries);
          });
      });
      return deferred.promise;
    }

    function GetPatientDrugReturnEntries(returnCode, startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var sellableItemTable = db.getSchema().table('SellableItem');
        var outletTable = db.getSchema().table('Department');
        var staffMemberTable = db.getSchema().table('StaffMember');
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var drugReturnTable = db.getSchema().table('DrugReturn');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        if (returnCode != undefined) {
          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('PatientOtherNames'), patientTable.Number.as('PatientNumber'), patientTable.DateOfBirth.as('DateOfBirth'),
            genderTable.Name.as('GenderName'), dispatchLogTable.ReceiptNumber.as('ReceiptNumber'), drugReturnTable.PerformedAt.as('PerformedAt'), dispatchLogTable.Amount.as('Amount'),
            sellableItemTable.Name.as('Name'), dispatchLogTable.UnitCost.as('Price'), sellableItemTable.BrandName.as('BrandName'), outletTable.Name.as('OutletName'), dispatchLogTable.Number.as('ReturnCode'),
            dispatchLogTable.Date.as('Date'), dispatchLogTable.Quantity.as('ReturnedQuantity'), staffMemberTable.OtherNames.as('OtherNames'), staffMemberTable.LastName.as('LastName'))
            .from(dispatchLogTable)

            .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(outletTable, dispatchLogTable.DepartmentId.eq(outletTable.Id))
            .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
            .innerJoin(drugReturnTable, dispatchLogTable.Number.eq(drugReturnTable.Number))
            .innerJoin(encounterTable, drugReturnTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
            .where(
            lf.op.and(
              dispatchLogTable.IsDeleted.eq(false),
              dispatchLogTable.Number.eq(returnCode)

            )
            ).exec().then(function (drugReturnEntries) {
              deferred.resolve(drugReturnEntries);
            });
        } else {
          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('PatientOtherNames'), patientTable.Number.as('PatientNumber'), patientTable.DateOfBirth.as('DateOfBirth'),
            genderTable.Name.as('GenderName'), dispatchLogTable.ReceiptNumber.as('ReceiptNumber'), drugReturnTable.PerformedAt.as('PerformedAt'), dispatchLogTable.Amount.as('Amount'),
            sellableItemTable.Name.as('Name'), dispatchLogTable.UnitCost.as('Price'), sellableItemTable.BrandName.as('BrandName'), outletTable.Name.as('OutletName'), dispatchLogTable.Number.as('ReturnCode'),
            dispatchLogTable.Date.as('Date'), dispatchLogTable.Quantity.as('ReturnedQuantity'), staffMemberTable.OtherNames.as('OtherNames'), staffMemberTable.LastName.as('LastName'))
            .from(dispatchLogTable)

            .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(outletTable, dispatchLogTable.DepartmentId.eq(outletTable.Id))
            .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
            .innerJoin(drugReturnTable, dispatchLogTable.Number.eq(drugReturnTable.Number))
            .innerJoin(encounterTable, drugReturnTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
            .where(
            lf.op.and(
              dispatchLogTable.IsDeleted.eq(false),
              dispatchLogTable.Date.between(startDate, endDate)

            )
            ).exec().then(function (drugReturnEntries) {
              deferred.resolve(drugReturnEntries);
            });
        }

      });
      return deferred.promise;
    }

    function GetReceivedSupplies(supplyId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var sellableItemTable = db.getSchema().table('SellableItem');
        var outletTable = db.getSchema().table('Department');
        var staffMemberTable = db.getSchema().table('StaffMember');
        var supplyBatchTable = db.getSchema().table('SupplyBatch');

        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var supplyTable = db.getSchema().table('Supply');
        var supplierTable = db.getSchema().table('SupplierRegister')
        var departmentTable = db.getSchema().table('Department');

        db.select(sellableItemTable.Name.as('Name'), supplyTable.InvoiceNumber.as('InvoiceNumber'), supplyTable.Number.as('Number'), sellableItemTable.BrandName.as('BrandName'),
          supplyBatchTable.DateReceived.as('Date'), supplyBatchTable.BatchNumber.as('BatchNumber'), supplyBatchTable.ExpiryDate.as('ExpiryDate'), sellableItemTable.CostPrice.as('UnitCost'),
          sellableItemTable.Strength.as('DrugStrength'), drugformulationTable.Name.as('Formulation'), supplyBatchTable.RecievedQuantity.as('Quantity'), departmentTable.Name.as('OutletName'), supplyTable.DeliveredBy.as('SupplierRep'),
          supplierTable.SupplierName.as('SupplierName'), staffMemberTable.OtherNames.as('OtherNames'), staffMemberTable.LastName.as('LastName'))

          .from(supplyBatchTable)

          .innerJoin(sellableItemTable, supplyBatchTable.SellableItemId.eq(sellableItemTable.Id))

          .innerJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .innerJoin(staffMemberTable, supplyBatchTable.ReceivedBy.eq(staffMemberTable.Id))
          .innerJoin(supplyTable, supplyBatchTable.SupplyId.eq(supplyTable.Id))
          .innerJoin(supplierTable, supplyTable.SupplierId.eq(supplierTable.Id))
          .innerJoin(departmentTable, supplyBatchTable.DepartmentId.eq(departmentTable.Id))
          .where(
          lf.op.and(
            supplyBatchTable.IsDeleted.eq(false),
            supplyTable.Id.eq(supplyId)
          )
          ).exec().then(function (damageddrugentries) {
            deferred.resolve(damageddrugentries);
          });
      });
      return deferred.promise;
    }

    function GetOutletActivityReport(outletId, startDate, endDate) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var departmentTable = db.getSchema().table('Department');

        var staffMemberTable = db.getSchema().table('StaffMember');
        var sellableItemTable = db.getSchema().table('SellableItem');

        db.select(departmentTable.Name.as('OutletName'), staffMemberTable.LastName.as('LastName'), staffMemberTable.OtherNames.as('OtherNames'), dispatchLogTable.Activity.as('Activity'),
          dispatchLogTable.Quantity.as('Quantity'), dispatchLogTable.Date.as('Date'), sellableItemTable.Name.as('ItemName'), sellableItemTable.BrandName.as('BrandName'), dispatchLogTable.Number.as('TransRef'),
          dispatchLogTable.InitialStockCount.as('InitialQuantity'), dispatchLogTable.FinalStockCount.as('FinalQuantity'), dispatchLogTable.Description.as('Description')).from(dispatchLogTable)

          .innerJoin(departmentTable, dispatchLogTable.DepartmentId.eq(departmentTable.Id))
          .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
          .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
          .where(
          lf.op.and(
            dispatchLogTable.IsDeleted.eq(false),
            dispatchLogTable.Date.between(startDate, endDate),
            dispatchLogTable.DepartmentId.eq(outletId)
          )
          ).exec().then(function (outletActivities) {
            deferred.resolve(outletActivities);
          });
      });
      return deferred.promise;
    }


    function GetPharmacistActivity(staffId, startDate, endDate) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var departmentTable = db.getSchema().table('Department');

        var staffMemberTable = db.getSchema().table('StaffMember');
        var sellableItemTable = db.getSchema().table('SellableItem');

        db.select(
          departmentTable.Name.as('OutletName'), staffMemberTable.LastName.as('LastName'), staffMemberTable.OtherNames.as('OtherNames'), dispatchLogTable.Activity.as('Activity'),
          dispatchLogTable.Quantity.as('Quantity'), dispatchLogTable.Date.as('Date'), sellableItemTable.Name.as('ItemName'), sellableItemTable.BrandName.as('BrandName'), dispatchLogTable.Number.as('TransRef'),
          dispatchLogTable.InitialStockCount.as('InitialQuantity'), dispatchLogTable.FinalStockCount.as('FinalQuantity'), dispatchLogTable.Description.as('Description')).from(dispatchLogTable)

          .innerJoin(departmentTable, dispatchLogTable.DepartmentId.eq(departmentTable.Id))
          .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
          .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
          .where(
          lf.op.and(
            dispatchLogTable.IsDeleted.eq(false),
            dispatchLogTable.Date.between(startDate, endDate),
            staffMemberTable.Id.eq(staffId)
          )
          ).exec().then(function (outletActivities) {
            deferred.resolve(outletActivities);
          });
      });
      return deferred.promise;
    }


    function GetDrugIssuanceEntries(issuanceId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var sellableItemTable = db.getSchema().table('SellableItem');
        var drugRequisitionTable = db.getSchema().table('DrugRequisition');
        var drugRequisitionEntriesTable = db.getSchema().table('DrugRequisitionEntries');
        var issuingOutletTable = db.getSchema().table('Department').as('IssuingOutlet');
        var receivingOutletTable = db.getSchema().table('Department').as('ReceivingOutlet');
        var staffMemberTable = db.getSchema().table('StaffMember').as('IssuingStaff');
        var receivingStaffTable = db.getSchema().table('StaffMember').as('ReceivingStaff');

        db.select(sellableItemTable.Name.as('Name'), sellableItemTable.BrandName.as('BrandName'), issuingOutletTable.Name.as('IssuingOutletName'), receivingOutletTable.Name.as('ReceivingOutletName'),
          drugRequisitionTable.IssuanceNumber.as('IssuanceNumber'), drugRequisitionTable.IssuanceDate.as('Date'), drugRequisitionEntriesTable.Quantity.as('Quantity'), receivingStaffTable.OtherNames.as('ReceivingStaffOtherNames'), receivingStaffTable.LastName.as('ReceivingStaffLastName'), staffMemberTable.OtherNames.as('IssuingOtherNames'), staffMemberTable.LastName.as('IssuingLastName')).from(drugRequisitionEntriesTable)

          .innerJoin(drugRequisitionTable, drugRequisitionEntriesTable.DrugRequisitionId.eq(drugRequisitionTable.Id))
          .innerJoin(sellableItemTable, drugRequisitionEntriesTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(issuingOutletTable, drugRequisitionTable.IssuingOutletId.eq(issuingOutletTable.Id))
          .innerJoin(receivingOutletTable, drugRequisitionTable.ReceivingOutletId.eq(receivingOutletTable.Id))
          .innerJoin(staffMemberTable, drugRequisitionTable.IssuedBy.eq(staffMemberTable.Id))
          .innerJoin(receivingStaffTable, drugRequisitionTable.RaisedBy.eq(receivingStaffTable.Id))
          .where(
          lf.op.and(
            drugRequisitionEntriesTable.IsDeleted.eq(false),
            drugRequisitionTable.IsGranted.eq(true),
            drugRequisitionTable.IssuanceNumber.neq(null),
            drugRequisitionTable.Id.eq(issuanceId)
          )
          ).exec().then(function (drugRequisitionsEntries) {
            deferred.resolve(drugRequisitionsEntries);
          });
      });
      return deferred.promise;
    }

    function GetSellableItemsBySearchText(searchText, isDrug, departmentId) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var sellableItemTable = db.getSchema().table('SellableItem');

        var drugclassificationTable = db.getSchema().table('DrugClassification');
        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');

        var departmentTable = db.getSchema().table('Department');
        var searchTextMatcher = new RegExp(searchText, "i");
        if (departmentId != null ) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))

            .leftOuterJoin(dispatchLogTable, sellableItemTable.Id.eq(dispatchLogTable.SellableItemId))
            .leftOuterJoin(departmentTable, sellableItemTable.ServiceDepartmentId.eq(departmentTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false), sellableItemTable.IsActive.eq(true),
              sellableItemTable.IsDrug.eq(isDrug),
              sellableItemTable.ServiceDepartmentId.eq(departmentId),
              lf.op.or(
                sellableItemTable.Name.match(searchTextMatcher),
                sellableItemTable.BrandName.match(searchTextMatcher),
                sellableItemTable.Code.match(searchTextMatcher)

              )
            )
            ).exec().
            then(function (sellableItems) {
              deferred.resolve(sellableItems);
            });
        } else {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))

            .leftOuterJoin(dispatchLogTable, sellableItemTable.Id.eq(dispatchLogTable.SellableItemId))
            .leftOuterJoin(departmentTable, sellableItemTable.ServiceDepartmentId.eq(departmentTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false), sellableItemTable.IsActive.eq(true),
              sellableItemTable.IsDrug.eq(isDrug),
              lf.op.or(
                sellableItemTable.Name.match(searchTextMatcher),
                sellableItemTable.BrandName.match(searchTextMatcher),
                sellableItemTable.Code.match(searchTextMatcher)
              )
            )
            ).exec().
            then(function (sellableItems) {
              deferred.resolve(sellableItems);
            });
        }

      });
      return deferred.promise;
    }

    function GetDrugRequisitionEntries(requisitionId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var sellableItemTable = db.getSchema().table('SellableItem');

        var drugclassificationTable = db.getSchema().table('DrugClassification');
        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var receivingOutletDispatchLogTable = db.getSchema().table('SellableItemDispatchlog').as('ReceivingOutletDispatchLogTable');

        var drugRequisitionTable = db.getSchema().table('DrugRequisition');
        var drugRequisitionEntriesTable = db.getSchema().table('DrugRequisitionEntries')
        var issuingOutletDispatctLogTable = db.getSchema().table('SellableItemDispatchlog').as('IssuingOutletDispatctLogTable');
        var issuingOutlet = db.getSchema().table('Department').as('IssuingOutlet');
        var receivingOutlet = db.getSchema().table('Department').as('ReceivingOutlet');
        // var drugRequisitionTable = db.getSchema().table('DrugRequisition');

        db.select().
          from(drugRequisitionEntriesTable)

          .innerJoin(sellableItemTable, drugRequisitionEntriesTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(drugRequisitionTable, drugRequisitionEntriesTable.DrugRequisitionId.eq(drugRequisitionTable.Id))
          .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
          .leftOuterJoin(receivingOutlet,drugRequisitionTable.ReceivingOutletId.eq(receivingOutlet.Id))
          .leftOuterJoin(issuingOutlet,drugRequisitionTable.IssuingOutletId.eq(issuingOutlet.Id))
          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))

          .leftOuterJoin(receivingOutletDispatchLogTable, sellableItemTable.Id.eq(receivingOutletDispatchLogTable.SellableItemId))
          .leftOuterJoin(issuingOutletDispatctLogTable, sellableItemTable.Id.eq(issuingOutletDispatctLogTable.SellableItemId))
          .where(
          lf.op.and(
            drugRequisitionEntriesTable.IsDeleted.eq(false), sellableItemTable.IsActive.eq(true),
            sellableItemTable.IsDrug.eq(true),
            drugRequisitionEntriesTable.DrugRequisitionId.eq(requisitionId),
            issuingOutletDispatctLogTable.DepartmentId.eq(drugRequisitionTable.IssuingOutletId),
            receivingOutletDispatchLogTable.DepartmentId.eq(drugRequisitionTable.ReceivingOutletId)
          )
          ).exec().
          then(function (drugRequisitionEntries) {
            deferred.resolve(drugRequisitionEntries);
          });
      });
      return deferred.promise;
    }

    function GetPharmacyItemsForIssuanceAndRequisition(sellableItemId, receivingOutletId, issuingOutletId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var sellableItemTable = db.getSchema().table('SellableItem');

        var drugclassificationTable = db.getSchema().table('DrugClassification');
        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var receivingOutletDispatchLogTable = db.getSchema().table('SellableItemDispatchlog').as('ReceivingOutletDispatchLogTable');

        var issuingOutletDispatctLogTable = db.getSchema().table('SellableItemDispatchlog').as('IssuingOutletDispatctLogTable');
        //  var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(sellableItemTable)

          .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))

          .leftOuterJoin(receivingOutletDispatchLogTable, sellableItemTable.Id.eq(receivingOutletDispatchLogTable.SellableItemId))
          .leftOuterJoin(issuingOutletDispatctLogTable, sellableItemTable.Id.eq(issuingOutletDispatctLogTable.SellableItemId))
          .where(
          lf.op.and(
            sellableItemTable.IsDeleted.eq(false), sellableItemTable.IsActive.eq(true),
            sellableItemTable.IsDrug.eq(true),
            sellableItemTable.Id.eq(sellableItemId),
            issuingOutletDispatctLogTable.DepartmentId.eq(issuingOutletId),
            receivingOutletDispatchLogTable.DepartmentId.eq(receivingOutletId)
          )
          ).exec().
          then(function (sellableItems) {

            deferred.resolve(sellableItems);
          });
      });
      return deferred.promise;
    }

    function GetPharmacyItems(searchObject) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var sellableItemTable = db.getSchema().table('SellableItem');
        var drugclassificationTable = db.getSchema().table('DrugClassification');
        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var staffMemberTable = db.getSchema().table('StaffMember');

        // var searchTextMatcher = new RegExp(searchText, "i");
        if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))

            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),

              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),

              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined && searchObject.brandName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),

              drugclassificationTable.Id.eq(searchObject.drugClassificationId),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.brandName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined && searchObject.brandName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.brandName != undefined &&
          searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.genericName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDated && searchObject.brandName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined && searchObject.brandName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.BrandName.eq(searchObject.brandName)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              drugformulationTable.Id.eq(searchObject.drugFormulationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.brandName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              drugclassificationTable.Id.eq(searchObject.drugClassificationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined &&
          searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.Name.eq(searchObject.genericName),
              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.brandName != undefined &&
          searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.BrandName.eq(searchObject.brandName),

              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.drugClassificationId != undefined && searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId),
              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.startDate != undefined && searchObject.endDate) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.RegistrationDate.between(searchObject.startDate, searchObject.endDate)

            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.genericName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),
              sellableItemTable.Name.eq(searchObject.genericName)
            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.brandName != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),
              sellableItemTable.IsDrug.eq(true),

              sellableItemTable.BrandName.eq(searchObject.brandName)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.drugClassificationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              drugclassificationTable.Id.eq(searchObject.drugClassificationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        } else if (searchObject.drugFormulationId != undefined) {
          db.select().
            from(sellableItemTable)

            .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
            .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
            .leftOuterJoin(staffMemberTable,sellableItemTable.RegBy.eq(staffMemberTable.Id))
            .where(
            lf.op.and(
              sellableItemTable.IsDeleted.eq(false),

              sellableItemTable.IsDrug.eq(true),
              drugformulationTable.Id.eq(searchObject.drugFormulationId)


            )
            ).exec().
            then(function (sellableItems) {

              deferred.resolve(sellableItems);
            });
        }
      });
      return deferred.promise;
    }

    function GetSchemes() {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {


        var schemeTable = db.getSchema().table('Scheme');
        var schemePlanTable = db.getSchema().table('SchemePlans');

        db.select().
          from(schemeTable).

          innerJoin(schemePlanTable, schemeTable.Id.eq(schemePlanTable.SchemeId)).
          where(
          lf.op.and(
            schemeTable.IsDeleted.eq(false)
          )
          ).exec().
          then(function (schemes) {
            var uniqueSchemes = _.uniqBy(schemes, 'SchemePlans.LocalId');
            deferred.resolve(uniqueSchemes);
          });
      });
      return deferred.promise;
    }


    function GetBedsByWardId(wardId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var departmentTable = db.getSchema().table('Department');

        var bedTable = db.getSchema().table('Bed');

        db.select().
          from(bedTable).

          innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
          where(
          lf.op.and(
            bedTable.IsDeleted.eq(false),
            bedTable.DepartmentId.eq(wardId),
            bedTable.Status.eq('Good'),
            bedTable.IsOccupied.eq(false)
          )
          ).exec().
          then(function (beds) {
            deferred.resolve(beds);
          });
      });

      return deferred.promise;
    }

    function GetAllBeds() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('Department');

        var bedTable = db.getSchema().table('Bed');

        db.select().
          from(bedTable).

          innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
          where(
          lf.op.and(
            bedTable.IsDeleted.eq(false),
            departmentTable.Category.eq('Ward'),
            bedTable.Status.eq('Good')
          )
          ).exec().
          then(function (beds) {
            var uniqueBeds = _.uniqBy(beds, 'Bed.LocalId');
            deferred.resolve(uniqueBeds);
          });
      });

      return deferred.promise;
    }

    function UpdateGender(updatedGender) {

      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('Gender');
        db.update(table).
          set(table.Name, (updatedGender.Name)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedGender.Id)).
          exec();
      });
    }

    function UpdateSupplier(updatedSupplier) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('SupplierRegister');
        db.update(table).
          set(table.SupplierName, (updatedSupplier.SupplierName)).
          set(table.OfficeAddress, (updatedSupplier.OfficeAddress)).
          set(table.PostalAddress, (updatedSupplier.PostalAddress)).
          set(table.CompanyRegNumber, (updatedSupplier.CompanyRegNumber)).
          set(table.PhoneNumber, (updatedSupplier.PhoneNumber)).
          set(table.WebsiteAddress, (updatedSupplier.WebsiteAddress)).
          set(table.FaxNumber, updatedSupplier.FaxNumber).
          set(table.Email, updatedSupplier.Email).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedSupplier.Id)).
          exec();
      });
    }

    function UpdateSellableItem(updateItem) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('SellableItem');
        db.update(table).
          set(table.CostPrice, (updateItem.CostPrice)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updateItem.Id)).
          exec();
      });
    }


    function UpdateBed(updatedBed) {
      lovefield.getDB().then(function (db) {

        var table = db.getSchema().table('Bed');
        db.update(table).
          set(table.IsOccupied, (updatedBed.IsOccupied)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedBed.Id)).
          exec();
      });
    }

    function UpdatePharmacyItem(updatedItem) {

      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('SellableItem');
        db.update(table).
          set(table.IsActive, (updatedItem.state)).
          // set(table.IsDeleted,!(updatedItem.state)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedItem.Id)).
          exec();
      });
    }

    function DeleteRow(deletedRowId, tableName) {

      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        db.update(table)
          .set(table.IsDeleted, true).
          set(table.LastModifiedDate, new Date()).
          where(table.Id.eq(deletedRowId)).
          exec();
      });
    }

    function GetPatientById(patientId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');

        db.select().
          from(patientTable).
          where(
          patientTable.Id.eq(patientId)
          ).exec().
          then(function (patients) {
            deferred.resolve(patients);
          });
      });
      return deferred.promise;
    }

    function DischargePatient(patientId, dischargeDetails) {
      var deferred = $q.defer();
      dischargeDetails.DischargeDate = dischargeDetails.DischargeDate || new Date();
      lovefield.getDB().then(function (db) {

        var encounterTable = db.getSchema().table('Encounter');
        var wardStayTable = db.getSchema().table('WardStayHistory');

        db.select().
          from(wardStayTable).
          innerJoin(encounterTable, wardStayTable.EncounterId.eq(encounterTable.Id)).
          where(
          lf.op.and(
            encounterTable.PatientId.eq(patientId),
            wardStayTable.Id.neq(null), wardStayTable.IsDischarged.eq(false)
          )
          ).exec().then(function (wardStays) {

            if (wardStays.length == 0) {
              deferred.resolve(0);
            } else {
              console.log(wardStays);
              var lastWardStay = wardStays[wardStays.length - 1];
              UpdateBed({ Id: lastWardStay['WardStayHistory'].NewBedId, IsOccupied: false });

              //deferred.resolve(1);
              wardStays.map(function (wardStay) {
                db.update(wardStayTable)
                  .set(wardStayTable.EndDate, dischargeDetails.DischargeDate)
                  .set(wardStayTable.IsDischarged, true)
                  .set(wardStayTable.LastModifiedDate, new Date())
                  .set(wardStayTable.EndDate, dischargeDetails.DischargeDate)
                  .set(wardStayTable.DischargedByStatus, dischargeDetails.DischargedByStatus)
                  .set(wardStayTable.DischargeStatus, dischargeDetails.DischargeStatus)
                  .set(wardStayTable.DischargedBy, dischargeDetails.DischargedBy)
                  .set(wardStayTable.DischargeDate, dischargeDetails.DischargeDate)
                  .where(wardStayTable.Id.eq(wardStay['WardStayHistory'].Id))
                  .exec().then(function () {
                    deferred.resolve(1);
                  });
              });
            }
          });
      });
      return deferred.promise;
    }

    function GetBillsByBillId(billId, status) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');

        var encouterTable = db.getSchema().table('Encounter');
        var depositTable = db.getSchema().table('Deposit');
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        //var schemeTable = db.getSchema().table('Scheme');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var drugformulationTable = db.getSchema().table('DrugFormulation');

        db.select().
          from(saleEntryTable).

          innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id)).
          innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id)).
          leftOuterJoin(encouterTable, saleTable.EncounterId.eq(encouterTable.Id)).
          leftOuterJoin(patientTable, encouterTable.PatientId.eq(patientTable.Id)).
          leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id)).
          leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId)).
          leftOuterJoin(depositTable, encouterTable.Id.eq(depositTable.EncounterId)).
          leftOuterJoin(dispatchLogTable, sellableItemTable.Id.eq(dispatchLogTable.SellableItemId)).
          where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleTable.Id.eq(billId),
            saleEntryTable.HasPaid.eq(false)
            //  saleEntryTable.Status.eq(status)
          )
          ).exec().
          then(function (saleEntries) {
            deferred.resolve(saleEntries);
          });
      });
      return deferred.promise;
    }

    function GetBillsByEncounterId(patientId, status) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');

        var encouterTable = db.getSchema().table('Encounter');
        var depositTable = db.getSchema().table('Deposit');
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        var schemePlanTable = db.getSchema().table('SchemePlans');
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');

        var sellableItem = db.getSchema().table('SellableItem');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var discountUpdateTable = db.getSchema().table('SchemeDiscountUpdates');


        if (status != undefined) {
          db.select().
            from(saleEntryTable).

            innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id)).
            innerJoin(encouterTable, saleTable.EncounterId.eq(encouterTable.Id)).
            innerJoin(patientTable, encouterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(discountUpdateTable, saleEntryTable.Id.eq(discountUpdateTable.SaleEntryId)).
            leftOuterJoin(depositTable, encouterTable.Id.eq(depositTable.EncounterId)).
            leftOuterJoin(sellableItem, saleEntryTable.SellableItemId.eq(sellableItem.Id)).
            leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId)).
            where(
            lf.op.and(
              saleEntryTable.IsDeleted.eq(false),
              patientTable.Id.eq(patientId),
              saleEntryTable.HasPaid.eq(false),
              saleEntryTable.Status.eq(status),
              saleTable.EncounterId.neq(null)
            )
            ).exec().
            then(function (saleEntries) {
              deferred.resolve(saleEntries);
            });
        } else if (status == undefined) {
          db.select().
            from(saleEntryTable).

            leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id)).
            innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id)).
            innerJoin(encouterTable, saleTable.EncounterId.eq(encouterTable.Id)).
            innerJoin(patientTable, encouterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(discountUpdateTable, saleEntryTable.Id.eq(discountUpdateTable.SaleEntryId)).
            leftOuterJoin(depositTable, encouterTable.Id.eq(depositTable.EncounterId)).

            leftOuterJoin(sellableItem, saleEntryTable.SellableItemId.eq(sellableItem.Id)).
            leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId)).
            leftOuterJoin(schemePlanTable, schemeMembershipTable.SchemePlansId.eq(schemePlanTable.Id)).
            where(
            lf.op.and(
              saleEntryTable.IsDeleted.eq(false),
              patientTable.Id.eq(patientId),
              saleEntryTable.Status.eq('billed'),
              saleTable.EncounterId.neq(null)
            )
            ).exec().
            then(function (saleEntries) {
              deferred.resolve(saleEntries);
            });
        }
      });
      return deferred.promise;
    }

    function UpdateSale(updatedSale) {
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');


        var saleIds = _.uniq(updatedSale.Services.map(function (service) { return service.SaleId; }));

        for (var i = 0; i < saleIds.length; i++) {
          var saleId = saleIds[i];

          db.select().from(saleTable).where(saleTable.Id.eq(saleId)).exec().then(
            function (sale) {

              var comment = (sale[0].AdjustmentComment + (updatedSale.AdjustmentComment != undefined ?
                ('<br/>New Update : ' + updatedSale.AdjustmentComment) : ''));

              db.update(saleTable).
                set(saleTable.AdjustmentComment, comment).
                set(saleTable.LastModifiedDate, new Date()).
                where(saleTable.Id.eq(saleId)).
                exec();


            });
        }


        for (var i = 0; i < updatedSale.Services.length; i++) {

          db.update(saleEntryTable).
            set(saleEntryTable.Quantity, updatedSale.Services[i].Quantity).
            set(saleEntryTable.LastModifiedDate, new Date()).
            where(saleEntryTable.Id.eq(updatedSale.Services[i].Id)).exec();



        }
      });
    }


    function GetDepartmentByRevDepartmentCode(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('RevenueDepartment');
        //    var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(departmentTable).
          where(
          lf.op.and(
            departmentTable.IsDeleted.eq(false),
            departmentTable.Code.eq(searchText)
          )
          ).exec().
          then(function (departments) {

            deferred.resolve(departments);
          });
      });
      return deferred.promise;
    }


    function GetDepartmentByDepartmentCode(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('Department');
        var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(departmentTable).
          where(
          lf.op.and(
            departmentTable.IsDeleted.eq(false),
            departmentTable.Code.match(searchTextMatcher)
          )
          ).exec().
          then(function (departments) {
            deferred.resolve(departments);
          });
      });
      return deferred.promise;
    }

    function GetPosWorkshiftBySearchText(searchText, isClosed, isReconciled, isCompiled) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');

        //  var searchTextMatcher = new RegExp(searchText, "i");
        if (isClosed == undefined && isReconciled === undefined && isCompiled === undefined) {
          db.select().
            from(posWorkShiftTable)
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),

              posWorkShiftTable.Number.match(searchText)
            )
            ).exec().
            then(function (posWorkShifts) {
              deferred.resolve(posWorkShifts);
            });
        } else {
          db.select().
            from(posWorkShiftTable)
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.IsCompiled.eq(isCompiled),
              posWorkShiftTable.IsReconciled.eq(isReconciled),
              posWorkShiftTable.IsClosed.eq(isClosed),
              posWorkShiftTable.Number.match(searchText)
            )
            ).exec().
            then(function (posWorkShifts) {
              deferred.resolve(posWorkShifts);
            });
        }

      });
      return deferred.promise;
    }

    function GetShiftCompilationNumberBySearchText(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var shiftComplationTable = db.getSchema().table('ShiftCompilation');

        // var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(shiftComplationTable)
          .where(
          lf.op.and(
            shiftComplationTable.IsDeleted.eq(false),
            shiftComplationTable.Number.match(searchText)
          )
          ).exec().
          then(function (shiftCompilations) {
            deferred.resolve(shiftCompilations);
          });
      });
      return deferred.promise;
    }

    function checkIfPatientIsOnAdmission(patientId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var encounter = db.getSchema().table('Encounter');
        var wardStay = db.getSchema().table('WardStayHistory');
        var currentBed = db.getSchema().table('Bed');
        var currentWard = db.getSchema().table('Department');

        db.select().
          from(patientTable).
          innerJoin(encounter, patientTable.Id.eq(encounter.PatientId)).
          innerJoin(wardStay, encounter.Id.eq(wardStay.EncounterId)).
          innerJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id)).
          innerJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id)).
          orderBy(encounter.LocalId, lf.Order.DESC).
          where(
            lf.op.and(
              patientTable.IsDeleted.eq(false),
              currentBed.IsOccupied.eq(true),
              wardStay.IsDischarged.eq(false),
              wardStay.EndDate.eq(null),
              patientTable.Id.eq(patientId)
            )
          ).exec().
          then(function (patients) {
            deferred.resolve(patients);
          });
      });
      return deferred.promise;
    }


    function GetPatientOnAdmission(searchText) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');

        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');
        var encounter = db.getSchema().table('Encounter');
        var wardStay = db.getSchema().table('WardStayHistory');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var scheme = db.getSchema().table('Scheme');
        var currentBed = db.getSchema().table('Bed');
        var currentWard = db.getSchema().table('Department');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(patientTable).

          innerJoin(gender, patientTable.GenderId.eq(gender.Id)).
          innerJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
          leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
          innerJoin(encounter, patientTable.Id.eq(encounter.PatientId)).
          innerJoin(wardStay, encounter.Id.eq(wardStay.EncounterId)).
          leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
          leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
          leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
          innerJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id)).
          innerJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id)).
          orderBy(encounter.LocalId, lf.Order.DESC).
          where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            currentBed.IsOccupied.eq(true),
            wardStay.IsDischarged.eq(false),
            wardStay.EndDate.eq(null), lf.op.or(
              patientTable.Number.match(searchTextMatcher),
              patientTable.Surname.match(searchTextMatcher),
              patientTable.OtherNames.match(searchTextMatcher)
              //  currentBed.IsOccupied.eq(true)
            )
          )
          ).exec().
          then(function (patients) {

            var uniquePatients = _.uniqBy(patients, 'Patient.LocalId');

            deferred.resolve(uniquePatients);
          });
      });
      return deferred.promise;
    }

    function UpdateSaleEntry(updatedSale, saleReceiptId, posworkShiftId) {
      lovefield.getDB().then(function (db) {
        var saleEntryTable = db.getSchema().table('SaleEntry');
        for (var i = 0; i < updatedSale.length; i++) {
          db.update(saleEntryTable).
            set(saleEntryTable.SalesReceiptId, saleReceiptId).
            set(saleEntryTable.HasPaid, true).
            set(saleEntryTable.PosWorkShiftId, posworkShiftId).
            set(saleEntryTable.LastModifiedDate, new Date()).
            set(saleEntryTable.ReceiptAmount, updatedSale[i].NetAmount).
            where(saleEntryTable.Id.eq(updatedSale[i].Id)).exec();
        }
      });
    }

    function UpdateSaleEntries(updatedSaleEntry) {
      lovefield.getDB().then(function (db) {
        var saleEntryTable = db.getSchema().table('SaleEntry');

        db.update(saleEntryTable).
          set(saleEntryTable.Status, updatedSaleEntry.Status).
          set(saleEntryTable.LastModifiedDate, new Date()).
          set(saleEntryTable.Frequency, updatedSaleEntry.Frequency).
          set(saleEntryTable.Days, updatedSaleEntry.Days).
          set(saleEntryTable.DiscountPercentage, updatedSaleEntry.DiscountPercentage).
          set(saleEntryTable.Dosage, updatedSaleEntry.Dosage).
          set(saleEntryTable.Quantity, updatedSaleEntry.Quantity).
          set(saleEntryTable.TotalReturnedQuantity, updatedSaleEntry.TotalReturnedQuantity).
          where(saleEntryTable.Id.eq(updatedSaleEntry.Id)).exec();
      });
    }

    function DispenseDrugs(isDispensed, saleEntryId) {
      lovefield.getDB().then(function (db) {
        var saleEntryTable = db.getSchema().table('SaleEntry');
        db.update(saleEntryTable).
          set(saleEntryTable.IsDispensed, isDispensed).
          set(saleEntryTable.LastModifiedDate, new Date()).
          where(saleEntryTable.Id.eq(saleEntryId)).exec();
      });
    }



    function GetBillNumberSearchText(searchText, status, isDrug) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');

        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var scheme = db.getSchema().table('Scheme');
        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');

        var sellableItemTable = db.getSchema().table('SellableItem');
        var searchTextMatcher = new RegExp(searchText, "i");
        if (status == 'billed') {
          db.select().
            from(saleTable).

            innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId)).
            leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id)).
            leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(gender, patientTable.GenderId.eq(gender.Id)).
            leftOuterJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
            leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
            leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
            leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
            leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id))
            .where(
            lf.op.and(
              saleTable.IsDeleted.eq(false),
              saleEntryTable.HasPaid.eq(false),
              saleEntryTable.Status.eq(status),
              lf.op.or(
                saleTable.Number.match(searchTextMatcher),
                patientTable.OtherNames.match(searchTextMatcher),
                patientTable.Number.match(searchTextMatcher),
                patientTable.Surname.match(searchTextMatcher)
              )
            )
            ).exec().
            then(function (sales) {

              var uniqueSales = _.uniqBy(sales, 'Sale.LocalId');
              deferred.resolve(uniqueSales);
            });
        }
        if (status != 'billed' && isDrug != undefined) {

          db.select().
            from(saleTable).

            innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId)).
            leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id)).
            leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(gender, patientTable.GenderId.eq(gender.Id)).
            leftOuterJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
            leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
            leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
            leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
            leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
            leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .where(
            lf.op.and(
              saleTable.IsDeleted.eq(false),
              saleEntryTable.HasPaid.eq(false),
              saleEntryTable.Status.eq(status),
              sellableItemTable.IsDrug.eq(isDrug),
              lf.op.or(
                saleTable.Number.match(searchTextMatcher)
              )
            )
            ).exec().
            then(function (sales) {

              var uniqueSales = _.uniqBy(sales, 'Sale.LocalId');
              deferred.resolve(uniqueSales);
            });
        }
      });
      return deferred.promise;
    }

    function getPatientBills(patientId,startDate,endDate,status,isDrug) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');

        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var scheme = db.getSchema().table('Scheme');
        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');

        var sellableItemTable = db.getSchema().table('SellableItem');

        if (status == 'billed') {
          db.select().
            from(saleTable).

            innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId)).
            leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id)).
            leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(gender, patientTable.GenderId.eq(gender.Id)).
            leftOuterJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
            leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
            leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
            leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
            leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
            leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id)).
            where(
            lf.op.and(
              saleTable.IsDeleted.eq(false),
              saleEntryTable.HasPaid.eq(false),
              saleEntryTable.Status.eq(status),
              saleTable.RequestDate.between(startDate,endDate),
              patientTable.Id.eq(patientId)
            )
            ).exec().
            then(function (sales) {

              var uniqueSales = _.uniqBy(sales, 'Sale.LocalId');
              deferred.resolve(uniqueSales);
            });
        }
        if (status != 'billed' && isDrug != undefined) {

          db.select().
            from(saleTable).

            innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId)).
            leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id)).
            leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(gender, patientTable.GenderId.eq(gender.Id)).
            leftOuterJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
            leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
            leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
            leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
            leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
            leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id)).
            where(
            lf.op.and(
              saleTable.IsDeleted.eq(false),
              saleEntryTable.HasPaid.eq(false),
              saleEntryTable.Status.eq(status),
              sellableItemTable.IsDrug.eq(isDrug),
              saleTable.RequestDate.between(startDate,endDate),
              patientTable.Id.eq(patientId)
            )
            ).exec().
            then(function (sales) {

              var uniqueSales = _.uniqBy(sales, 'Sale.LocalId');
              deferred.resolve(uniqueSales);
            });
        }
      });
      return deferred.promise;
    }


    function UpdateSaleReceipt(updatedReceipt) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('SaleReceipt');
        db.update(table).
          set(table.TotalAmount, (updatedReceipt.TotalAmount)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedReceipt.Id)).
          exec();
      });
    }

    function GetRegisteredDrugs(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var sellableItemTable = db.getSchema().table('SellableItem');


        var drugformulationTable = db.getSchema().table('DrugFormulation');
        db.select(sellableItemTable.Code.as('Code'), sellableItemTable.BrandName.as('BrandName'), sellableItemTable.Name.as('Name'),
        sellableItemTable.Strength.as('DrugStrength'), drugformulationTable.Name.as('Formulation'), sellableItemTable.UnitsPerPack.as('UnitsPerPack'), sellableItemTable.PackPerPackingUnit.as('PackPerPackingUnit'),
          sellableItemTable.CostPrice.as('Cost'), sellableItemTable.NormalMarkUpClass.as('MarkupClass'), sellableItemTable.RegularSellingPrice.as('SellingPrice'), sellableItemTable.ReOrderLevel.as('ReOrderLevel'),
          sellableItemTable.RegistrationDate.as('RegistrationDate'))
          .from(sellableItemTable)

          .innerJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .where(
          lf.op.and(
            sellableItemTable.IsDeleted.eq(false),
            sellableItemTable.IsDrug.eq(true),
            sellableItemTable.RegistrationDate.between(startDate, endDate)
          )
          ).exec().then(function (sellableItems) {
            deferred.resolve(sellableItems);
          });
      });
      return deferred.promise;
    }

    function GetStockBalancePerOutlet(pharmacyOutletId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var departmentTable = db.getSchema().table('Department');
        var sellableItemTable = db.getSchema().table('SellableItem');

        var sellableItemDispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var drugformulationTable = db.getSchema().table('DrugFormulation');

        //      var searchTextMatcher = new RegExp(searchText, "i");

        db.select()
          .from(sellableItemTable)
          .leftOuterJoin(sellableItemDispatchLogTable, sellableItemTable.Id.eq(sellableItemDispatchLogTable.SellableItemId))
          .leftOuterJoin(departmentTable, sellableItemDispatchLogTable.DepartmentId.eq(departmentTable.Id))

          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .where(
          lf.op.and(
            sellableItemTable.IsDeleted.eq(false),
            sellableItemTable.IsActive.eq(true),
            sellableItemTable.IsDrug.eq(true),
            sellableItemDispatchLogTable.DepartmentId.eq(pharmacyOutletId)
          )
          ).exec().then(function (pharmacyItems) {
            deferred.resolve(pharmacyItems);
          });
      });
      return deferred.promise;
    }

    function GetReceiptDetailsByReceiptId(saleReceiptId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        var sellableItemTable = db.getSchema().table('SellableItem');


        db.select().
          from(saleEntryTable)
          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            saleEntryTable.SalesReceiptId.eq(saleReceiptId),
            saleReceiptTable.IsCancelled.eq(false)
          )
          ).exec().
          then(function (saleEntries) {
            deferred.resolve(saleEntries);
          });
      });
      return deferred.promise;
    }

    function GetSaleEntriessByReceiptId(saleReceiptId, isDrug, isDispensed) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleReceiptTable = db.getSchema().table('SaleReceipt');

        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        var sellableItemTable = db.getSchema().table('SellableItem');

        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var sellableItemDispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        db.select().
          from(saleEntryTable)

          .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))

          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .leftOuterJoin(sellableItemDispatchLogTable, sellableItemTable.Id.eq(sellableItemDispatchLogTable.SellableItemId))
          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            saleReceiptTable.Id.eq(saleReceiptId),
            sellableItemTable.IsDrug.eq(isDrug),
            saleReceiptTable.IsCancelled.eq(false),
            //  sellableItemDispatchLogTable.DepartmentId.eq(locationId),
            saleEntryTable.IsDispensed.eq(isDispensed)
          )
          ).exec().
          then(function (saleEntries) {
            deferred.resolve(saleEntries);
          });
      });
      return deferred.promise;
    }

    function GetReceiptDetails(saleReceiptId) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var staffMemberTable = db.getSchema().table('StaffMember');

        db.select(saleTable.CustomerName.as('Patient Name'), saleTable.CustomerPhone.as('Patient Number'), saleReceiptTable.Id.as('ReceiptId'),
          saleReceiptTable.Number.as('Receipt Number'), saleReceiptTable.ReceiptDate.as('ReceiptDate'),
          saleEntryTable.Name.as('Name'), saleEntryTable.Quantity.as('Quantity'), saleEntryTable.Price.as('Price'),
          saleEntryTable.DepositAmount.as('Deposit'), saleEntryTable.ReceiptAmount.as('ReceiptAmount'), saleEntryTable.WaivedAmount.as('Waived'),
          saleEntryTable.DiscountPercentage.as('DiscountPercentage'), paymentModeTable.Mode.as('PaymentType'), saleEntryTable.Id.as("Id"),
          posWorkShiftTable.Number.as('Shift Number'),staffMemberTable.Username.as('Cashier Username'))
          .from(saleEntryTable)

          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(paymentModeTable, saleReceiptTable.PaymentModeId.eq(paymentModeTable.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(posWorkShiftTable,saleReceiptTable.PosWorkShiftId.eq(posWorkShiftTable.Id))
          .innerJoin(staffMemberTable,posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleReceiptTable.Id.eq(saleReceiptId)
          )
          ).exec().then(function (result) {
            var uniqueEntries = _.uniqBy(result, 'Id');
            deferred.resolve(uniqueEntries);
          });
      });
      return deferred.promise;
    }

    function GetSaleReceiptForDrugItems(searchText, isDispensed) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleReceiptTable = db.getSchema().table('SaleReceipt');

        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');

        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(saleReceiptTable)

          .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .where(
          lf.op.and(
            saleReceiptTable.IsDeleted.eq(false),
            // saleReceiptTable.IsCancelled.eq(false),
            saleEntryTable.HasPaid.eq(true),
            saleReceiptTable.IsCancelled.eq(false),
            sellableItemTable.IsDrug.eq(true),
            saleEntryTable.IsDispensed.eq(isDispensed),
            lf.op.or(
              saleReceiptTable.Number.match(searchTextMatcher),
              patientTable.OtherNames.match(searchTextMatcher),
              patientTable.Number.match(searchTextMatcher),
              patientTable.Surname.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (saleReceipts) {

            var uniqueReceipts = _.uniqBy(saleReceipts, 'SaleReceipt.LocalId');
            deferred.resolve(uniqueReceipts);
          });
      });
      return deferred.promise;
    }

    function GetLabResultBySearchText(searchText, isVerifiedResults) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var testParameterTable = db.getSchema().table('TestParameter');
        var labResultTable = db.getSchema().table('LabResult');
        var labResultEntryTable = db.getSchema().table('LabResultEntries');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table("Patient");
        var maritalStateTable = db.getSchema().table('MaritalState');
        var religionTable = db.getSchema().table('Religion');
        var saleTable = db.getSchema().table('Sale');
        var searchTextMatcher = new RegExp(searchText, "i");
        db.select()
          .from(labResultEntryTable)

          .innerJoin(labResultTable, labResultEntryTable.LabResultId.eq(labResultTable.Id))
          .innerJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
          .innerJoin(testParameterTable, labResultEntryTable.TestParameterId.eq(testParameterTable.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .where(
          lf.op.and(
            labResultEntryTable.IsDeleted.eq(false),
            labResultTable.IsDeleted.eq(false),
            labResultTable.Number.match(searchTextMatcher),
            labResultTable.IsVerified.eq(isVerifiedResults)
          )
          ).exec().then(function (labresult) {
            deferred.resolve(labresult);
          });
      });
      return deferred.promise;
    }


    function GetSaleReceiptBySearchText(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleReceiptTable = db.getSchema().table('SaleReceipt');

        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var encounterTable = db.getSchema().table('Encounter');
        var wardStayHistoryTable = db.getSchema().table('WardStayHistory');
        var patientTable = db.getSchema().table('Patient');
        var departmentTable = db.getSchema().table('Department');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(saleReceiptTable)

          .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(departmentTable, sellableItemTable.ServiceDepartmentId.eq(departmentTable.Id))
          .leftOuterJoin(wardStayHistoryTable,encounterTable.Id.eq(wardStayHistoryTable.EncounterId))
          .where(
          lf.op.and(
            saleReceiptTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            saleReceiptTable.IsCancelled.eq(false),
            //sellableItemTable.IsDrug.eq(isDrug),
            lf.op.or(
              saleReceiptTable.Number.match(searchTextMatcher),
              patientTable.OtherNames.match(searchTextMatcher),
              patientTable.Number.match(searchTextMatcher),
              patientTable.Surname.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (saleReceipts) {

            var uniqueReceipts = _.uniqBy(saleReceipts, 'SaleReceipt.LocalId');
            deferred.resolve(uniqueReceipts);
          });
      });
      return deferred.promise;
    }

    function GetDepositDepartment() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var revenueDepartmentTable = db.getSchema().table('RevenueDepartment');
        db.select().
          from(revenueDepartmentTable).
          where(
          lf.op.and(
            revenueDepartmentTable.IsDeleted.eq(false),
            revenueDepartmentTable.Name.match('Deposit')
          )
          ).exec().
          then(function (revenueDepartment) {
            deferred.resolve(revenueDepartment);
          });
      });
      return deferred.promise;
    }


    function GetShift_DepositReceipt(shiftNumber) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {


        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var locationTable = db.getSchema().table('Department');
        var depositTable = db.getSchema().table('Deposit');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');

        var revenueDepartentTable = db.getSchema().table('RevenueDepartment');
        db.select(depositTable.ReceiptDate.as('TransactionDate'),depositTable.IsCancelled.as('IsCancelled'), depositTable.Id.as('SaleEntryId'), revenueDepartentTable.Id.as('ServiceDepartmentId'), depositTable.Description.as('ItemId'), depositTable.Id.as('ReceiptId'), depositTable.TotalAmount.as('ItemAmount'), depositTable.Description.as('Item'), depositTable.Number.as('ReceiptNumber'), depositTable.PayerName.as('Payer'),
          patientTable.Number.as('Patient Number'), paymentModeTable.Mode.as('PaymentModeName'), locationTable.Name.as('LocationName'), depositTable.TotalAmount.as('ReceiptAmount'), revenueDepartentTable.Name.as('RevDepartment'), revenueDepartentTable.Name.as('ServiceDepartment')).
          from(depositTable)
          .leftOuterJoin(encounterTable, depositTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(posWorkShiftTable, depositTable.PosWorkShiftId.eq(posWorkShiftTable.Id))
          .leftOuterJoin(paymentModeTable, depositTable.PaymentModeId.eq(paymentModeTable.Id))
          .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
          .innerJoin(revenueDepartentTable, depositTable.RevenueDepartmentId.eq(revenueDepartentTable.Id))
          .where(
          lf.op.and(
            depositTable.IsDeleted.eq(false),
           // depositTable.IsCancelled.eq(false),
            posWorkShiftTable.Number.match(shiftNumber),
            depositTable.Description.match('Deposit Made')
          )
          ).exec().
          then(function (shift) {
            deferred.resolve(shift);
          });
      });
      return deferred.promise;
    }


    function GetShift_SaleRecipt(shiftNumber) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var locationTable = db.getSchema().table('Department').as('LocationTable');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var saleTable = db.getSchema().table('Sale');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department').as('ServiceDepartmentTable');
        var revenueDepartmentTable = db.getSchema().table('RevenueDepartment');

        db.select(saleEntryTable.Name.as('Item'), saleReceiptTable.Id.as('ReceiptId'), saleEntryTable.Id.as('SaleEntryId'), serviceDepartmentTable.Id.as('ServiceDepartmentId'),
          sellableItemTable.Id.as('ItemId'), saleEntryTable.ReceiptAmount.as('ItemAmount'), saleReceiptTable.ReceiptDate.as('TransactionDate'), saleReceiptTable.Number.as('ReceiptNumber'),
          saleTable.CustomerName.as('Payer'),
          saleTable.CustomerPhone.as('Patient Number'),saleReceiptTable.IsCancelled.as('IsCancelled'), paymentModeTable.Mode.as('PaymentModeName'),
          locationTable.Name.as('LocationName'), revenueDepartmentTable.Name.as('RevDepartment'), serviceDepartmentTable.Name.as('ServiceDepartment'),
          saleReceiptTable.TotalAmount.as('ReceiptAmount')).
          from(saleReceiptTable)
          .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(posWorkShiftTable, saleEntryTable.PosWorkShiftId.eq(posWorkShiftTable.Id))
          .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
          .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
          .leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(revenueDepartmentTable, sellableItemTable.RevenueDepartmentId.eq(revenueDepartmentTable.Id))
          .leftOuterJoin(serviceDepartmentTable, sellableItemTable.ServiceDepartmentId.eq(serviceDepartmentTable.Id))
          .where(
          lf.op.and(
          //  saleReceiptTable.IsCancelled.eq(false),
            saleReceiptTable.IsDeleted.eq(false),
            posWorkShiftTable.Number.match(shiftNumber),
            sellableItemTable.IsDrug.eq(false)
          )
          ).exec().
          then(function (serviceItems) {
            db.select(saleEntryTable.Name.as('Item'), saleReceiptTable.Id.as('ReceiptId'), saleEntryTable.Id.as('SaleEntryId'), serviceDepartmentTable.Id.as('ServiceDepartmentId'),
              sellableItemTable.Id.as('ItemId'), saleEntryTable.ReceiptAmount.as('ItemAmount'), saleReceiptTable.ReceiptDate.as('TransactionDate'), saleReceiptTable.Number.as('ReceiptNumber'),
              saleTable.CustomerName.as('Payer'),
              saleTable.CustomerPhone.as('Patient Number'),saleReceiptTable.IsCancelled.as('IsCancelled'), paymentModeTable.Mode.as('PaymentModeName'),
              locationTable.Name.as('LocationName'), revenueDepartmentTable.Name.as('RevDepartment'), serviceDepartmentTable.Name.as('ServiceDepartment'),
              saleReceiptTable.TotalAmount.as('ReceiptAmount')).
              from(saleReceiptTable)
              .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
              .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
              .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
              .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
              .leftOuterJoin(posWorkShiftTable, saleEntryTable.PosWorkShiftId.eq(posWorkShiftTable.Id))
              .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
              .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
              .leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
              .leftOuterJoin(revenueDepartmentTable, sellableItemTable.RevenueDepartmentId.eq(revenueDepartmentTable.Id))
              .leftOuterJoin(serviceDepartmentTable, saleEntryTable.BillingOutletId.eq(serviceDepartmentTable.Id))
              .where(
              lf.op.and(
              //  saleReceiptTable.IsCancelled.eq(false),
                saleReceiptTable.IsDeleted.eq(false),
                posWorkShiftTable.Number.match(shiftNumber),
                sellableItemTable.IsDrug.eq(true)
              )
              ).exec().then(function(drugItems){
                debugger;
                if(drugItems.length>0){
                  serviceItems = serviceItems.concat(drugItems);
                }
                deferred.resolve(serviceItems);
              });
          });
      });
      return deferred.promise;
    }

    function GetCompiledShifts(shiftData) {

      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');

        var depositTable = db.getSchema().table('Deposit');
        var shiftComplationTable = db.getSchema().table('ShiftCompilation')

         if (shiftData.username != undefined &&  shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(shiftComplationTable)
            .leftOuterJoin(posWorkShiftTable, shiftComplationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
            .innerJoin(staffMemberTable, shiftComplationTable.StaffMemberId.eq(staffMemberTable.Id))

            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))

            .where(
            lf.op.and(
              shiftComplationTable.IsDeleted.eq(false),
              shiftComplationTable.Date.between(shiftData.startDate, shiftData.endDate),
              staffMemberTable.Username.eq(shiftData.username)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }

        else if (shiftData.username != undefined) {
          db.select().
            from(shiftComplationTable)
            .leftOuterJoin(posWorkShiftTable, shiftComplationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
            .innerJoin(staffMemberTable, shiftComplationTable.StaffMemberId.eq(staffMemberTable.Id))

            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))

            .where(
            lf.op.and(
              shiftComplationTable.IsDeleted.eq(false),
              staffMemberTable.Username.eq(shiftData.username)
            )
            )
            .exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }

        else if (shiftData.compilationNumber != undefined) {

          db.select().
            from(shiftComplationTable)

            .leftOuterJoin(posWorkShiftTable, shiftComplationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
            .leftOuterJoin(staffMemberTable, shiftComplationTable.StaffMemberId.eq(staffMemberTable.Id))

            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))

            .where(
            lf.op.and(
              shiftComplationTable.IsDeleted.eq(false),

              shiftComplationTable.Number.match(shiftData.compilationNumber)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }
        else if (shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(shiftComplationTable)

            .leftOuterJoin(posWorkShiftTable, shiftComplationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
            .innerJoin(staffMemberTable, shiftComplationTable.StaffMemberId.eq(staffMemberTable.Id))

            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))

            .where(
            lf.op.and(
              shiftComplationTable.IsDeleted.eq(false),
              shiftComplationTable.Date.between(shiftData.startDate, shiftData.endDate)
            )
            ).exec().
            then(function (shiftComplations) {
              deferred.resolve(shiftComplations);
            });
        }

      });
      return deferred.promise;
    }


    function GetShiftsForCompilation(shiftData) {

      var deferred = $q.defer();
      shiftData.shiftNumber = shiftData.shiftNumber != undefined ? new RegExp(shiftData.shiftNumber, "i") : null;

      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var locationTable = db.getSchema().table('Department');
        var depositTable = db.getSchema().table('Deposit');
        var reconciledByStaff = db.getSchema().table('StaffMember').as('ReconciledByStaff');
        var shiftComplationTable = db.getSchema().table('ShiftCompilation');
        // var searchTextMatcher = new RegExp(shiftData.shiftNumber, 'i');

        if (shiftData.username != undefined && shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(reconciledByStaff, posWorkShiftTable.ReconciledBy.eq(reconciledByStaff.Username))
            .leftOuterJoin(shiftComplationTable, posWorkShiftTable.ShiftCompilationId.eq(shiftComplationTable.Id))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate),
              staffMemberTable.Username.eq(shiftData.username),
              posWorkShiftTable.IsReconciled.eq(shiftData.isReconciled),
              posWorkShiftTable.IsCompiled.eq(shiftData.isCompiled), posWorkShiftTable.IsClosed.eq(true)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.username != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(reconciledByStaff, posWorkShiftTable.ReconciledBy.eq(reconciledByStaff.Username))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
            lf.op.and(
              posWorkShiftTable.IsReconciled.eq(shiftData.isReconciled),
              posWorkShiftTable.IsDeleted.eq(false),
              staffMemberTable.Username.eq(shiftData.username),

              posWorkShiftTable.IsCompiled.eq(shiftData.isCompiled), posWorkShiftTable.IsClosed.eq(true)
            )
            )
            .exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.shiftNumber != undefined) {

          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(reconciledByStaff, posWorkShiftTable.ReconciledBy.eq(reconciledByStaff.Username))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),

              posWorkShiftTable.Number.match(shiftData.shiftNumber),
              posWorkShiftTable.IsReconciled.eq(shiftData.isReconciled),
              posWorkShiftTable.IsCompiled.eq(shiftData.isCompiled), posWorkShiftTable.IsClosed.eq(true)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if ((shiftData.startDate != undefined && shiftData.endDate != undefined)) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(reconciledByStaff, posWorkShiftTable.ReconciledBy.eq(reconciledByStaff.Username))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate),
              posWorkShiftTable.IsReconciled.eq(shiftData.isReconciled),
              posWorkShiftTable.IsCompiled.eq(shiftData.isCompiled), posWorkShiftTable.IsClosed.eq(true)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }

      });
      return deferred.promise;
    }

    function GetShifts(shiftData) {

      var deferred = $q.defer();
      shiftData.shiftNumber = shiftData.shiftNumber != undefined ? new RegExp(shiftData.shiftNumber, "i") : null;
      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var locationTable = db.getSchema().table('Department');
        var depositTable = db.getSchema().table('Deposit');

        if (shiftData.username != undefined && shiftData.shiftNumber == undefined && (shiftData.startDate != undefined && shiftData.endDate != undefined)) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
              lf.op.and(
                posWorkShiftTable.IsDeleted.eq(false),
                staffMemberTable.Username.eq(shiftData.username),
                posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate)
              )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.username != undefined && shiftData.shiftNumber == undefined && (shiftData.startDate == undefined || shiftData.endDate == undefined) ){
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
              lf.op.and(
                posWorkShiftTable.IsDeleted.eq(false),
                staffMemberTable.Username.eq(shiftData.username)
              )
            )
            .exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.username == undefined && shiftData.shiftNumber == undefined && (shiftData.startDate != undefined && shiftData.endDate != undefined)) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.shiftNumber != null) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.Number.match(shiftData.shiftNumber)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }

      });
      return deferred.promise;
    }


    function GetShiftsForSurveillanve(shiftData) {
      var deferred = $q.defer();

      shiftData.shiftNumber = new RegExp(shiftData.shiftNumber, "i");
      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var locationTable = db.getSchema().table('Department');
        var depositTable = db.getSchema().table('Deposit');
        var shiftComplationTable = db.getSchema().table('ShiftCompilation')
        var reconciledBy = db.getSchema().table('StaffMember').as('ReconciledBy');

        if (shiftData.cashierUsername != undefined && shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(shiftComplationTable, posWorkShiftTable.ShiftCompilationId.eq(shiftComplationTable.Id))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate),
              staffMemberTable.Username.eq(shiftData.cashierUsername)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.acknowledgedBy != undefined && shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.Id))
            .leftOuterJoin(shiftComplationTable, posWorkShiftTable.ShiftCompilationId.eq(shiftComplationTable.Id))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.ReconciledBy.eq(shiftData.acknowledgedBy),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate)
            )
            ).exec().
            then(function (posWorkShift) {
              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.startDate != undefined && shiftData.endDate != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(shiftComplationTable, posWorkShiftTable.ShiftCompilationId.eq(shiftComplationTable.Id))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.StartDate.between(shiftData.startDate, shiftData.endDate)
            )
            )
            .exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.acknowledgedBy != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.ReconciledBy.match(shiftData.acknowledgedBy)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.cashierUsername != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              staffMemberTable.Username.eq(shiftData.cashierUsername)
            )
            )
            .exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        } else if (shiftData.shiftNumber != undefined) {
          db.select().
            from(posWorkShiftTable)
            .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
            .leftOuterJoin(locationTable, posWorkShiftTable.LocationId.eq(locationTable.Id))
            .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
            .leftOuterJoin(saleEntryTable, posWorkShiftTable.Id.eq(saleEntryTable.PosWorkShiftId))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .leftOuterJoin(paymentModeTable, posWorkShiftTable.Id.eq(paymentModeTable.PosWorkShiftId))
            .leftOuterJoin(reconciledBy, posWorkShiftTable.ReconciledBy.eq(reconciledBy.Username))
            .where(
            lf.op.and(
              posWorkShiftTable.IsDeleted.eq(false),
              posWorkShiftTable.Number.match(shiftData.shiftNumber)
            )
            ).exec().
            then(function (posWorkShift) {

              deferred.resolve(posWorkShift);
            });
        }
      });
      return deferred.promise;
    }

    function UpdateWorkShift(shift, staff, operation) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('PosWorkShift');
        if (operation == 'To Close') {
          db.update(table).
            set(table.IsClosed, true).
            set(table.LastModifiedDate, new Date()).
            set(table.ClosedBy, staff).
            where(
            table.Id.eq(shift.Id)).
            exec();
        } else if (operation == 'To Reconcile') {
          db.update(table).
            set(table.IsReconciled, true).
            set(table.LastModifiedDate, new Date()).
            set(table.ReconciledBy, staff).
            set(table.ReconciliationDate, new Date()).
            where(
            table.Id.eq(shift.Id)).
            exec();
        } else if (operation == 'To ReverseReconciliation') {
          db.update(table).
            set(table.IsReconciled, false).
            set(table.LastModifiedDate, new Date()).
            set(table.ReconciledBy, null).
            set(table.ReconciliationDate, null).
            where(
            table.Id.eq(shift.Id)).
            exec();
        } else if (operation == 'To Compile') {
          db.update(table).
            set(table.IsCompiled, true).
            set(table.LastModifiedDate, new Date()).
            set(table.CompiledBy, staff).
            set(table.CompilationDate, new Date()).
            where(
            table.Id.eq(shift.Id)).
            exec();
        } else if (operation == 'To ReverseCompilation') {

          db.update(table).
            set(table.IsCompiled, false).
            set(table.LastModifiedDate, new Date()).
            set(table.CompiledBy, null).
            set(table.ShiftCompilationId, null).
            set(table.CompilationDate, null).
            where(
            table.Id.eq(shift.Id)).
            exec();
        }
      });
    }


    function CheckforSuperadmin(username) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        //  var searchTextMatcher = new RegExp(username,"i");
        db.select().
          from(staffMemberTable)

          .where(
          lf.op.and(
            staffMemberTable.IsDeleted.eq(false),
            staffMemberTable.Username.eq(username),
            staffMemberTable.IsActive.eq(true)
          )
          ).exec().
          then(function (staff) {
            deferred.resolve(staff);
          });
      });
      return deferred.promise;
    }

    function GetWorkShift(staffId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        db.select().
          from(posWorkShiftTable)
          .where(
          lf.op.and(
            posWorkShiftTable.IsDeleted.eq(false),
            posWorkShiftTable.StaffMemberId.eq(staffId),
            posWorkShiftTable.IsClosed.eq(false)
          )
          ).exec().
          then(function (staffMember) {
            deferred.resolve(staffMember);
          });
      });
      return deferred.promise;
    }

    function VerifyUser(username, password) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var staffMemberTable = db.getSchema().table('StaffMember');
        var roleTable = db.getSchema().table('Role');
        var acessibleModule = db.getSchema().table('RoleAccessDefinition');
        var departmentTable = db.getSchema().table('Department');
        // var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var templateAssignmentTable = db.getSchema().table('TemplateAssignments');
        //  var searchTextMatcher = new RegExp(username,"i");
        db.select().
          from(staffMemberTable)
          .leftOuterJoin(roleTable, staffMemberTable.RoleId.eq(roleTable.Id))
          .leftOuterJoin(acessibleModule, roleTable.Id.eq(acessibleModule.RoleId))
          // .leftOuterJoin(posWorkShiftTable, staffMemberTable.Id.eq(posWorkShiftTable.StaffMemberId))
          .leftOuterJoin(departmentTable, staffMemberTable.DepartmentId.eq(departmentTable.Id))
          .leftOuterJoin(templateAssignmentTable, departmentTable.Id.eq(templateAssignmentTable.DepartmentId))
          .where(
          lf.op.and(
            staffMemberTable.IsDeleted.eq(false),
            staffMemberTable.Password.eq(password),
            staffMemberTable.Username.eq(username),
            staffMemberTable.IsActive.eq(true)
          )
          ).exec().
          then(function (staffMember) {
            deferred.resolve(staffMember);
          });
      });
      return deferred.promise;
    }

    function UpdateStaffDetail(updatedStaffDetail, description) {

      lovefield.getDB().then(function (db) {

        var table = db.getSchema().table('StaffMember');

        if (description == 'ROLE') {
          db.update(table).
            set(table.RoleId, updatedStaffDetail.RoleId).
            set(table.LastModifiedDate, new Date()).
            where(
            table.Id.eq(updatedStaffDetail.Id)).
            exec();
        } else if (description == 'DEPARTMENT') {
          db.update(table).
            set(table.DepartmentId, updatedStaffDetail.DepartmentId).
            set(table.LastModifiedDate, new Date()).
            where(
            table.Id.eq(updatedStaffDetail.Id)).
            exec();
        } else if (description == 'PASSWORD') {
          db.update(table).
            set(table.Password, updatedStaffDetail.Password).
            set(table.LastModifiedDate, new Date()).
            where(
            table.Id.eq(updatedStaffDetail.Id)).
            exec();
        } else {
          db.update(table).
            set(table.IsActive, (updatedStaffDetail.IsActive)).
            set(table.LastModifiedDate, new Date()).
            where(
            table.Id.eq(updatedStaffDetail.Id)).
            exec();
        }
      });
    }

    function GetSelectedSchemeType(schemeTypeId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var schemeTypeTable = db.getSchema().table('SchemePlans');
        db.select().
          from(schemeTypeTable).
          where(
          lf.op.and(
            schemeTypeTable.IsDeleted.eq(false),
            schemeTypeTable.Id.eq(schemeTypeId)
          )
          ).exec().
          then(function (schemeType) {
            deferred.resolve(schemeType);
          });
      });
      return deferred.promise;
    }

    function GetSchemeTypes(schemeId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var schemeTypeTable = db.getSchema().table('SchemePlans');
        db.select().
          from(schemeTypeTable).
          where(
          lf.op.and(
            schemeTypeTable.IsDeleted.eq(false),
            schemeTypeTable.SchemeId.eq(schemeId)
          )
          ).exec().
          then(function (schemeTypes) {
            deferred.resolve(schemeTypes);
          });
      });
      return deferred.promise;
    }

    function GetAssesibleModules(roleId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var assesibleTable = db.getSchema().table('RoleAccessDefinition');

        db.select().
          from(assesibleTable)
          .where(
          lf.op.and(
            assesibleTable.IsDeleted.eq(false),
            assesibleTable.RoleId.eq(roleId)
          )
          ).exec().
          then(function (assesibleTables) {
            deferred.resolve(assesibleTables);
          });
      });
      return deferred.promise;
    }

    function GetClientData(key) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var clientDataTable = db.getSchema().table('ClientData');

        db.select().
          from(clientDataTable).

          where(
          lf.op.and(clientDataTable.IsDeleted.eq(false),
            clientDataTable.Key.eq(key)
          )
          ).exec().then(function (clientData) {
            deferred.resolve(clientData);
          });
      });
      return deferred.promise;
    }

    function GetGlobalConstants(key) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var globalConstantTable = db.getSchema().table('GlobalConstants');

        db.select().
          from(globalConstantTable).

          where(
          lf.op.and(globalConstantTable.IsDeleted.eq(false),
            globalConstantTable.Key.eq(key)
          )
          ).exec().then(function (globalConstants) {
            deferred.resolve(globalConstants);
          });
      });
      return deferred.promise;
    }

    function GetCodingandIndexing(startDate, endDate, departmentId, encounterId, status) {
      var deferred = $q.defer();
      //console.log(status);
      lovefield.getDB().then(function (db) {

        var departmentTable = db.getSchema().table('Department');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var diseaseIndex = db.getSchema().table('DiseaseIndex');
        var diseaseIndicies = db.getSchema().table('DiseaseIndicies');
        var surgeryIndex = db.getSchema().table('SurgeryIndex');
        var surgeryIndicies = db.getSchema().table('SurgicalIndicies');

        if (departmentId != 0 && status != "INDEXED" && status != 'PENDING') {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).

            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.DepartmentId.eq(departmentId),
              encounterTable.IsDeleted.eq(false)
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }

        if (encounterId != 0 && status != "INDEXED" && status != 'PENDING') {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).
            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.Id.eq(encounterId),
              encounterTable.IsDeleted.eq(false)
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }


        if (departmentId != 0 && status == 'PENDING') {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).

            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.DepartmentId.eq(departmentId),
              encounterTable.IsDeleted.eq(false),
              diseaseIndicies.Id.eq(null),
              surgeryIndicies.Id.eq(null)
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }

        if (encounterId != 0 && status == "INDEXED") {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).
            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.Id.eq(encounterId),
              encounterTable.IsDeleted.eq(false),
              lf.op.or(
                diseaseIndicies.Id.neq(null),
                surgeryIndicies.Id.neq(null)
              )
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }

        if (departmentId != 0 && status == 'INDEXED') {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).
            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.DepartmentId.eq(departmentId),
              encounterTable.IsDeleted.eq(false),
              lf.op.or(
                diseaseIndicies.Id.neq(null),
                surgeryIndicies.Id.neq(null)
              )
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }

        if (encounterId != 0 && status == "PENDING") {

          db.select().
            from(encounterTable).
            innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
            leftOuterJoin(diseaseIndex, encounterTable.Id.eq(diseaseIndex.EncounterId)).
            innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id)).
            leftOuterJoin(diseaseIndicies, diseaseIndex.Id.eq(diseaseIndicies.DiseaseIndexId)).
            leftOuterJoin(surgeryIndex, encounterTable.Id.eq(surgeryIndex.EncounterId)).
            leftOuterJoin(surgeryIndicies, surgeryIndex.Id.eq(surgeryIndicies.SurgeryIndexId)).
            where(
            lf.op.and(
              encounterTable.Id.eq(encounterId),
              encounterTable.IsDeleted.eq(false),
              diseaseIndicies.Id.eq(null),
              surgeryIndicies.Id.eq(null)
            )
            ).
            exec().
            then(function (indicies) {
              deferred.resolve(indicies);
            });
        }
      });
      return deferred.promise;
    }


    function UpdateObjectId(tableName, updatedId, oldId) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table(tableName);
        db.update(table).
          set(table.Id, (updatedId)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(oldId)).
          exec();
      });
    }

    function UpdateGlobalConstant(key, value) {
      //
      var deferred = $q.defer();
      // value = new Date(returnedItem.CreationDate);
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('GlobalConstants');
        db.update(table).
          set(table.Value, (value)).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Key.eq(key)).
          exec().then(function (result) {
            deferred.resolve(result);
          });
      });
      return deferred.promise;
    }

    function GetNursesWaitingList(departmentId, today) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var encounterTable = db.getSchema().table('Encounter');

        var patientTable = db.getSchema().table('Patient');
        var departmentTable = db.getSchema().table('Department');
        var genderTable = db.getSchema().table('Gender');
        var religionTable = db.getSchema().table('Religion');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var currentBed = db.getSchema().table('Bed');

        var wardStay = db.getSchema().table('WardStayHistory');

        db.select()
          .from(encounterTable)

          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .leftOuterJoin(wardStay, encounterTable.Id.eq(wardStay.EncounterId))
          .leftOuterJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id))
         // .leftOuterJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .orderBy(encounterTable.LocalId, lf.Order.DESC)
          .where(
          lf.op.and(
            encounterTable.DepartmentId.eq(departmentId),
            encounterTable.IsDeleted.eq(false),

            lf.op.or(
              lf.op.and(
                currentBed.IsOccupied.eq(true),
                wardStay.IsDischarged.eq(false),
                wardStay.EndDate.eq(null)
              ),
              lf.op.and(
                encounterTable.StartDate.gte(today)
              )

            )
          )
          ).exec().then(function (encounters) {
            var uniqueList = _.uniqBy(encounters,'Patient.LocalId');
            deferred.resolve(uniqueList);
          });

      });

      return deferred.promise;
    }

    function GetDoctorsWaitingList(physicianId, today) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var encounterTable = db.getSchema().table('Encounter');

        var patientTable = db.getSchema().table('Patient');
        var departmentTable = db.getSchema().table('Department');
        var genderTable = db.getSchema().table('Gender');
        var religionTable = db.getSchema().table('Religion');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var currentBed = db.getSchema().table('Bed');

        var wardStay = db.getSchema().table('WardStayHistory');

        db.select()
          .from(encounterTable)

          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(departmentTable, encounterTable.DepartmentId.eq(departmentTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .leftOuterJoin(wardStay, encounterTable.Id.eq(wardStay.EncounterId))
          .leftOuterJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id))
          .orderBy(encounterTable.LocalId, lf.Order.DESC)
          .where(
            lf.op.and(
              encounterTable.IsDeleted.eq(false),
              encounterTable.AttendingPhysician.eq(physicianId),
              lf.op.or(
                lf.op.and(
                  currentBed.IsOccupied.eq(true),
                  wardStay.IsDischarged.eq(false),
                  wardStay.EndDate.eq(null)
                ),
                lf.op.and(
                  encounterTable.StartDate.gte(today)
                )
              )
            )
            ).exec().then(function (encounters) {
              var uniqueList = _.uniqBy(encounters,'Patient.LocalId');
              deferred.resolve(uniqueList);
          });

      });
      return deferred.promise;
    }

    function UpdateEncounter(encounter) {
      lovefield.getDB().then(function (db) {
        var encounterTable = db.getSchema().table('Encounter');
        db.update(encounterTable).
          set(encounterTable.Situation, (encounter.Situation)).
          set(encounterTable.AttendingPhysician, (encounter.AttendingPhysician)).
          set(encounterTable.EndDate, encounter.EndDate).
          set(encounterTable.Number, encounter.Number).
          set(encounterTable.DepartmentId,encounter.DepartmentId).
          set(encounterTable.LastModifiedDate, new Date()).
          where(
          encounterTable.Id.eq(encounter.Id)).
          exec();
      });
    }

    function GetPatientDetailsByEncounterId(encounterId,patientId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var vitalSignsTable = db.getSchema().table('VitalSigns');
        var consultationTable = db.getSchema().table('Consultations');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var scheme = db.getSchema().table('Scheme');
        var clinicTable = db.getSchema().table('Department').as('ClinicVisited');
        var consultantInchargeTable = db.getSchema().table('StaffMember').as('ConsultantInCharge');
        var requestingDoctorTable = db.getSchema().table('StaffMember').as('RequestingDoctor');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        var religionTable = db.getSchema().table('Religion');
        var diagnosisEntriesTable = db.getSchema().table('DiagnosisEntries');
        var diagnosisByTable = db.getSchema().table('StaffMember').as('DiagnosisBy');
        var genderTable = db.getSchema().table('Gender');
        var rhesusFactorTable = db.getSchema().table('RhesusFactor');
        var bloodTypeTable = db.getSchema().table('BloodType');
        var genotypeTable = db.getSchema().table('Genotype');
        var wardStayTable = db.getSchema().table('WardStayHistory');
        var bedTable = db.getSchema().table('Bed');
        var saleTable = db.getSchema().table('Sale');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var itemDepartment = db.getSchema().table('Department').as('ItemDepartment');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var testParameterTable = db.getSchema().table('TestParameter');
        var wardTable = db.getSchema().table('Department');
        var vitalSignStafTable = db.getSchema().table('StaffMember').as('VitalSignBy');
        var labresultTable = db.getSchema().table('LabResult');
        var labResultEntriesTable = db.getSchema().table('LabResultEntries');
        var radiologyResultTable = db.getSchema().table('RadiologyResult');
        var labResultBy = db.getSchema().table('StaffMember').as('LabResultBy');
        var xrayResultBy = db.getSchema().table('StaffMember').as('XrayResultBy');
        var rshipWithNok = db.getSchema().table('Relationship').as('RelationshipWithNok');
        if(encounterId!=null){
          db.select()
          .from(encounterTable)

          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(consultationTable, encounterTable.Id.eq(consultationTable.EncounterId))
          .leftOuterJoin(requestingDoctorTable, consultationTable.DoctorsId.eq(requestingDoctorTable.Id))
          .leftOuterJoin(vitalSignsTable, encounterTable.Id.eq(vitalSignsTable.EncounterId))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .leftOuterJoin(rshipWithNok, patientTable.RelationshipWithNokId.eq(rshipWithNok.Id))
          .innerJoin(clinicTable, encounterTable.DepartmentId.eq(clinicTable.Id))
          .leftOuterJoin(rhesusFactorTable, patientTable.RhesusFactorId.eq(rhesusFactorTable.Id))
          .leftOuterJoin(saleTable, encounterTable.Id.eq(saleTable.EncounterId))
          .leftOuterJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId))
          .leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(itemDepartment, saleEntryTable.BillingOutletId.eq(itemDepartment.Id))
          .leftOuterJoin(genotypeTable, patientTable.GenotypeId.eq(genotypeTable.Id))
          .leftOuterJoin(bloodTypeTable, patientTable.BloodTypeId.eq(bloodTypeTable.Id))
          .leftOuterJoin(vitalSignStafTable, vitalSignsTable.TakenBy.eq(vitalSignStafTable.Id))
          .leftOuterJoin(wardStayTable, encounterTable.Id.eq(wardStayTable.EncounterId))
          .leftOuterJoin(bedTable, wardStayTable.NewBedId.eq(bedTable.Id))
          .leftOuterJoin(wardTable, bedTable.DepartmentId.eq(wardTable.Id))
          .leftOuterJoin(consultantInchargeTable, consultationTable.ConsultantInChargeId.eq(consultantInchargeTable.Id))
          .leftOuterJoin(diagnosisEntriesTable, consultationTable.Id.eq(diagnosisEntriesTable.ConsultationId))
          .leftOuterJoin(diagnosisByTable, diagnosisEntriesTable.DiagnosisBy.eq(diagnosisByTable.Id))
          .leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId))
          .leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id))
          .leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id))
          .leftOuterJoin(labresultTable, saleEntryTable.Id.eq(labresultTable.SaleEntryId))
          .leftOuterJoin(labResultEntriesTable, labresultTable.Id.eq(labResultEntriesTable.LabResultId))
          .leftOuterJoin(testParameterTable, labResultEntriesTable.TestParameterId.eq(testParameterTable.Id))
          .leftOuterJoin(labResultBy, labresultTable.EnteredByStaffId.eq(labResultBy.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .leftOuterJoin(xrayResultBy, radiologyResultTable.PreparedBy.eq(xrayResultBy.Id))
          .where(
          lf.op.and(
            encounterTable.IsDeleted.eq(false),
            encounterTable.Id.eq(encounterId),
            lf.op.or(
              radiologyResultTable.Id.eq(null), radiologyResultTable.IsSentToDoctor.eq(true)
            ),
            lf.op.or(
              labresultTable.Id.eq(null), labresultTable.HasSentToDoctor.eq(true)
            )
          )
          ).exec().then(function (encounterDetails) {
            deferred.resolve(encounterDetails);
          });
        }
        else if(patientId!=null){
          db.select()
          .from(encounterTable)

          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(consultationTable, encounterTable.Id.eq(consultationTable.EncounterId))
          .leftOuterJoin(requestingDoctorTable, consultationTable.DoctorsId.eq(requestingDoctorTable.Id))
          .leftOuterJoin(vitalSignsTable, encounterTable.Id.eq(vitalSignsTable.EncounterId))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .leftOuterJoin(rshipWithNok, patientTable.RelationshipWithNokId.eq(rshipWithNok.Id))
          .innerJoin(clinicTable, encounterTable.DepartmentId.eq(clinicTable.Id))
          .leftOuterJoin(rhesusFactorTable, patientTable.RhesusFactorId.eq(rhesusFactorTable.Id))
          .leftOuterJoin(saleTable, encounterTable.Id.eq(saleTable.EncounterId))
          .leftOuterJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId))
          .leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(itemDepartment, saleEntryTable.BillingOutletId.eq(itemDepartment.Id))
          .leftOuterJoin(genotypeTable, patientTable.GenotypeId.eq(genotypeTable.Id))
          .leftOuterJoin(bloodTypeTable, patientTable.BloodTypeId.eq(bloodTypeTable.Id))
          .leftOuterJoin(vitalSignStafTable, vitalSignsTable.TakenBy.eq(vitalSignStafTable.Id))
          .leftOuterJoin(wardStayTable, encounterTable.Id.eq(wardStayTable.EncounterId))
          .leftOuterJoin(bedTable, wardStayTable.NewBedId.eq(bedTable.Id))
          .leftOuterJoin(wardTable, bedTable.DepartmentId.eq(wardTable.Id))
          .leftOuterJoin(consultantInchargeTable, consultationTable.ConsultantInChargeId.eq(consultantInchargeTable.Id))
          .leftOuterJoin(diagnosisEntriesTable, consultationTable.Id.eq(diagnosisEntriesTable.ConsultationId))
          .leftOuterJoin(diagnosisByTable, diagnosisEntriesTable.DiagnosisBy.eq(diagnosisByTable.Id))
          .leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId))
          .leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id))
          .leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id))
          .leftOuterJoin(labresultTable, saleEntryTable.Id.eq(labresultTable.SaleEntryId))
          .leftOuterJoin(labResultEntriesTable, labresultTable.Id.eq(labResultEntriesTable.LabResultId))
          .leftOuterJoin(testParameterTable, labResultEntriesTable.TestParameterId.eq(testParameterTable.Id))
          .leftOuterJoin(labResultBy, labresultTable.EnteredByStaffId.eq(labResultBy.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .leftOuterJoin(xrayResultBy, radiologyResultTable.PreparedBy.eq(xrayResultBy.Id))
          .orderBy(encounterTable.LocalId,lf.Order.ASC)
          .where(
          lf.op.and(
            encounterTable.IsDeleted.eq(false),
            encounterTable.PatientId.eq(patientId),
            lf.op.or(
              radiologyResultTable.Id.eq(null), radiologyResultTable.IsSentToDoctor.eq(true)
            ),
            lf.op.or(
              labresultTable.Id.eq(null), labresultTable.HasSentToDoctor.eq(true)
            )
          )
          ).exec().then(function (encounterDetails) {

            deferred.resolve(encounterDetails);
          });
        }

      });
      return deferred.promise;
    }

    function GetTestParameters(sellableItemId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var sellableItemTable = db.getSchema().table('SellableItem')
        var testParameterTable = db.getSchema().table('TestParameter');
        var departmentTable = db.getSchema().table('Department');

        db.select()
          .from(testParameterTable)

          .innerJoin(sellableItemTable, testParameterTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(departmentTable, sellableItemTable.ServiceDepartmentId.eq(departmentTable.Id))
          .where(
          lf.op.and(
            sellableItemTable.IsDrug.eq(false),
            departmentTable.Category.eq('Laboratory'),
            testParameterTable.IsDeleted.eq(false),
            testParameterTable.SellableItemId.eq(sellableItemId)
          )
          ).exec().then(function (parameters) {
            deferred.resolve(parameters);
          });
      });
      return deferred.promise;
    }

    function UpdateParameter(updatedParameter) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('TestParameter');
        db.update(table).
          set(table.Name, (updatedParameter.Name)).
          set(table.Range, updatedParameter.Range).
          set(table.Unit, updatedParameter.Unit).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(updatedParameter.Id)).
          exec();
      });
    }

    function GetWardDetails(startDate, endDate, patientIdentity, wardId) {

      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {


        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');
        var wardstayhistoryTable = db.getSchema().table('WardStayHistory');
        var departmentTable = db.getSchema().table('Department');
        var bedTable = db.getSchema().table('Bed');

        if (startDate && endDate != undefined) {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'), patientTable.Number.as('PatientNo'), genderTable.Name.as('GenderName'),
            patientTable.DateOfBirth.as('DateOfBirth'), bedTable.Id.as('Id'), wardstayhistoryTable.NewBedId.as('bedId'), bedTable.DepartmentId.as('wardId'), departmentTable.Id.as('departmentId'), departmentTable.Name.as('CurrentWard'), wardstayhistoryTable.StartDate.as('AdmissionDate'), wardstayhistoryTable.TransferDate.as('TransferDate')).
            from(patientTable).

            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
            orderBy(encounterTable.LocalId, lf.Order.DESC).
            where(
            lf.op.and(
              patientTable.IsDeleted.eq(false),
              wardstayhistoryTable.OldBedId.neq(null),
              wardstayhistoryTable.TransferDate.between(startDate, endDate)
            )
            )
            .exec().then(function (patient) {

              deferred.resolve(patient);
            });
        } else if (patientIdentity != undefined) {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'), patientTable.Number.as('PatientNo'), genderTable.Name.as('GenderName'),
            patientTable.DateOfBirth.as('DateOfBirth'), departmentTable.Name.as('CurrentWard'), wardstayhistoryTable.StartDate.as('AdmissionDate'), wardstayhistoryTable.TransferDate.as('TransferDate')).

            from(patientTable).

            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
            orderBy(encounterTable.LocalId, lf.Order.DESC).
            where(
            lf.op.and(
              patientTable.IsDeleted.eq(false),
              wardstayhistoryTable.OldBedId.neq(null),
              //  patientTable.Id.neq(null),
              patientTable.Id.eq(patientIdentity['Patient'].Id)
            )
            )
            .exec().then(function (patient) {
              deferred.resolve(patient);
            })
        } else {
          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'), patientTable.Number.as('PatientNo'), genderTable.Name.as('GenderName'),
            patientTable.DateOfBirth.as('DateOfBirth'), departmentTable.Name.as('CurrentWard'), wardstayhistoryTable.StartDate.as('AdmissionDate'), wardstayhistoryTable.TransferDate.as('TransferDate')).
            from(patientTable).

            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
            orderBy(encounterTable.LocalId, lf.Order.DESC).
            where(
            lf.op.and(
              patientTable.IsDeleted.eq(false),
              wardstayhistoryTable.OldBedId.neq(null),
              departmentTable.Id.eq(wardId)
            )
            )
            .exec().then(function (wardDetails) {
              deferred.resolve(wardDetails);
            })
        }
      });
      return deferred.promise;
    }

    function GetRegisteredPatients(startDate, endDate) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');
        var departmentTable = db.getSchema().table('Department');

        db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
          patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
          patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
          patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName')).
          from(patientTable).
          innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).

          where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            patientTable.RegistrationDate.between(startDate, endDate)
          )
          )
          .exec().
          then(function (registeredPatients) {
            deferred.resolve(registeredPatients);
          });

      });
      return deferred.promise;
    }

    function GetPatientAdmsissionDetails(startDate, endDate, patientIdentity, wardId, patientCategory) {

      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {
        var bedTable = db.getSchema().table('Bed');
        var wardstayhistoryTable = db.getSchema().table('WardStayHistory');

        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');
        var departmentTable = db.getSchema().table('Department');

        if (startDate && endDate != undefined) {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
            patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
            patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
            patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName'), departmentTable.Name.as('Ward'),
            bedTable.Number.as('BedAssigned'), wardstayhistoryTable.StartDate.as('AdmissionDate')).
            from(patientTable).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).

            where(
            lf.op.and(
              bedTable.Id.neq(null),
              patientTable.IsDeleted.eq(false),
              patientTable.RegistrationDate.between(startDate, endDate)
            )
            )
            .exec().
            then(function (patientAdmissionDetails) {
              deferred.resolve(patientAdmissionDetails);
            });
        } else if (patientIdentity != undefined) {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
            patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
            patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
            patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName'), departmentTable.Name.as('Ward'),
            bedTable.Number.as('BedAssigned'), wardstayhistoryTable.StartDate.as('AdmissionDate')).
            from(patientTable).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).

            where(
            lf.op.and(
              bedTable.Id.neq(null),
              patientTable.IsDeleted.eq(false),
              patientTable.Id.eq(patientIdentity['Patient'].Id)
            )
            )
            .exec().
            then(function (patientAdmissionDetails) {
              deferred.resolve(patientAdmissionDetails);
            });
        } else if (wardId != undefined) {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
            patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
            patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
            patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName'), departmentTable.Name.as('Ward'),
            bedTable.Number.as('BedAssigned'), wardstayhistoryTable.StartDate.as('AdmissionDate')).
            from(patientTable).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).

            where(
            lf.op.and(
              bedTable.Id.neq(null),
              patientTable.IsDeleted.eq(false),
              bedTable.DepartmentId.eq(wardId)
            )
            )
            .exec().
            then(function (patientAdmissionDetails) {
              deferred.resolve(patientAdmissionDetails);
            });
        } else if (patientCategory = 'All') {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
            patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
            patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
            patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName'), departmentTable.Name.as('Ward'),
            bedTable.Number.as('BedAssigned'), wardstayhistoryTable.StartDate.as('AdmissionDate')).
            from(patientTable).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).

            where(
            lf.op.and(
              bedTable.Id.neq(null),
              patientTable.IsDeleted.eq(false),
              patientTable.PatientCategory.neq(null)
            )
            )
            .exec().
            then(function (patientAdmissionDetails) {
              deferred.resolve(patientAdmissionDetails);
            });
        } else {

          db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('OtherNames'),
            patientTable.Number.as('PatientNumber'), patientTable.PatientCategory.as('PatientCategory'),
            patientTable.ResidentialAddress.as('ContactAddress'), patientTable.RegistrationDate.as('RegistrationDate'),
            patientTable.DateOfBirth.as('DateOfBirth'), genderTable.Name.as('GenderName'), departmentTable.Name.as('Ward'),
            bedTable.Number.as('BedAssigned'), wardstayhistoryTable.StartDate.as('AdmissionDate')).
            from(patientTable).

            innerJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId)).
            innerJoin(bedTable, wardstayhistoryTable.NewBedId.eq(bedTable.Id)).
            innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id)).
            innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId)).
            innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).

            where(
            lf.op.and(
              bedTable.Id.neq(null),
              patientTable.IsDeleted.eq(false),
              patientTable.PatientCategory.eq(patientCategory)
            )
            )
            .exec().
            then(function (patientAdmissionDetails) {
              deferred.resolve(patientAdmissionDetails);
            });
        }
      })
      return deferred.promise;
    }

    function GetStates(countryId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var stateTable = db.getSchema().table('State');

        db.select().
          from(stateTable).

          where(
          lf.op.and(
            stateTable.IsDeleted.eq(false),
            stateTable.CountryId.eq(countryId)
          )
          ).exec().
          then(function (state) {
            deferred.resolve(state);
          });
      });
      return deferred.promise;
    }

    function GetSpecimenCollectionStatus(patientId, startDate, endDate, isEditCollection) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale');
        var genderTable = db.getSchema().table('Gender');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        if (patientId != undefined) {
          db.select()
            .from(saleEntryTable)

            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .where(
            lf.op.and(
              saleEntryTable.IsDeleted.eq(false),
              patientTable.Id.eq(patientId),
              saleEntryTable.Specimen.neq(null),
              //     saleEntryTable.Specimen.neq(undefined),
              saleEntryTable.SampleCollected.neq(null),
              //         saleEntryTable.SampleCollected.neq(undefined),
              saleEntryTable.SampleCollected.eq(isEditCollection)
            )
            ).exec().then(function (salentry) {
              deferred.resolve(salentry);
            });
        } else if (startDate && endDate != undefined) {
          db.select()
            .from(saleEntryTable)

            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
            .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
            .where(
            lf.op.and(
              saleEntryTable.IsDeleted.eq(false),
              //     patientTable.Id.eq(patientId),
              saleEntryTable.Specimen.neq(null),
              //      saleEntryTable.Specimen.neq(undefined),
              saleEntryTable.SampleCollected.neq(null),
              //      saleEntryTable.SampleCollected.neq(undefined),
              saleEntryTable.SampleCollected.eq(isEditCollection),
              saleEntryTable.TransactionDate.between(startDate, endDate)
            )
            ).exec().then(function (salentry) {
              deferred.resolve(salentry);
            });
        }


      });
      return deferred.promise;
    }

    function SubmitSampleCollection(collection) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('SaleEntry');
        db.update(table).
          set(table.SampleCollected, (collection.SampleCollected)).
          set(table.SampleCollectedBy, collection.LoggedInStaff).
          set(table.DateOfSampleCollection, new Date()).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(collection.Id)).
          exec();
      });
    }

    function GetTemplateAssignment(departmentId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var departmentTable = db.getSchema().table('Department')
        var templateAssignmentTable = db.getSchema().table('TemplateAssignments');

        db.select()
          .from(templateAssignmentTable)

          .innerJoin(departmentTable, templateAssignmentTable.DepartmentId.eq(departmentTable.Id))
          .where(
          lf.op.and(
            templateAssignmentTable.IsDeleted.eq(false),
            departmentTable.Id.eq(departmentId)
          )
          ).exec().then(function (template) {
            deferred.resolve(template);
          });
      });
      return deferred.promise;
    }

    function EditTemplateAssignment(assignment) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('TemplateAssignments');
        db.update(table).
          set(table.Name, (assignment.Name)).
          set(table.AssignedBy, assignment.AssignedBy).
          set(table.DateAssigned, new Date()).
          set(table.LastModifiedDate, new Date()).
          where(
          table.DepartmentId.eq(assignment.DepartmentId)).
          exec();
      });
    }

    // function GetVisitDetails(patientId){
    //     var deferred = $q.defer();
    //     lovefield.getDB().then(function(db){
    //         var diagnosisByTable=db.getSchema().table('DiagnosisEntries');
    //         var consultationTable =db.getSchema().table('Consultations');
    //         var encounterTable = db.getSchema().table('Encounter');
    //         var vitalSignsTable = db.getSchema().table('VitalSigns');

    //         db.select()
    //         .from(diagnosisEntriesTable)
    //         .innerJoin(consultationTable,diagnosisEntriesTable.ConsultationId.eq(consultationTable.Id))
    //         .innerJoin(encounterTable,consultationTable.EncounterId.eq(encounterTable.Id))
    //         .leftOuterJoin(vitalSignsTable,encounterTable.Id.eq(vitalSignsTable.EncounterId))

    //         .where(
    //             lf.op.and(
    //                 encounterTable.PatientId.eq(patientId),
    //                 diagnosisEntriesTable.IsDeleted.eq(false)
    //             )
    //         )
    //     })
    // }

    function GetServiceRequest(departmentId, saleReceiptId, startDate, endDate, isEdit) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleTable = db.getSchema().table('Sale')
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var testParameterTable = db.getSchema().table('TestParameter');
        var genderTable = db.getSchema().table('Gender');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var religionTable = db.getSchema().table('Religion');
        var schemeTable = db.getSchema().table('Scheme');
        var schemePlanTable = db.getSchema().table('SchemePlans')
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        // var staffMemberTable = db.getSchema().table('StaffMember');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var labResultTable = db.getSchema().table('LabResult');

        if (isEdit == false) {
          if (saleReceiptId != undefined) {
            db.select()
              .from(saleEntryTable)

              .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
              .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
              .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
              .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
              .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
              .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
              .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
              .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
              .leftOuterJoin(schemePlanTable, schemeMembershipTable.SchemePlansId.eq(schemePlanTable.Id))
              .leftOuterJoin(schemeTable, schemePlanTable.SchemeId.eq(schemeTable.Id))
              .leftOuterJoin(testParameterTable, sellableItemTable.Id.eq(testParameterTable.SellableItemId))
              .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
              .leftOuterJoin(labResultTable, saleEntryTable.Id.eq(labResultTable.SaleEntryId))
              .where(
              lf.op.and(
                saleEntryTable.IsDeleted.eq(false),
                saleReceiptTable.Id.eq(saleReceiptId),
                saleEntryTable.HasPaid.eq(true),
                sellableItemTable.ServiceDepartmentId.eq(departmentId),
                labResultTable.Id.eq(null)
              )
              ).exec().then(function (salentries) {
                deferred.resolve(salentries);
              });
          } else if (startDate && endDate != undefined) {

            db.select()
              .from(saleEntryTable)

              .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
              .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
              .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
              .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
              .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
              .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
              .leftOuterJoin(schemePlanTable, schemeMembershipTable.SchemePlansId.eq(schemePlanTable.Id))
              .leftOuterJoin(schemeTable, schemePlanTable.SchemeId.eq(schemeTable.Id))
              .leftOuterJoin(testParameterTable, sellableItemTable.Id.eq(testParameterTable.SellableItemId))
              .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
              .leftOuterJoin(labResultTable, saleEntryTable.Id.eq(labResultTable.SaleEntryId))
              .where(
              lf.op.and(
                saleEntryTable.IsDeleted.eq(false),
                saleTable.RequestDate.between(startDate, endDate),
                saleEntryTable.HasPaid.eq(true),
                sellableItemTable.ServiceDepartmentId.eq(departmentId),
                labResultTable.Id.eq(null)
              )
              ).exec().then(function (salentries) {
                deferred.resolve(salentries);
              });
          }
        } else if (isEdit == true) {
          if (saleReceiptId != undefined) {
            db.select()
              .from(saleEntryTable)

              .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
              .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
              .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
              .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
              .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
              .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
              .leftOuterJoin(schemePlanTable, schemeMembershipTable.SchemePlansId.eq(schemePlanTable.Id))
              .leftOuterJoin(schemeTable, schemePlanTable.SchemeId.eq(schemeTable.Id))
              .leftOuterJoin(testParameterTable, sellableItemTable.Id.eq(testParameterTable.SellableItemId))
              .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
              .leftOuterJoin(labResultTable, saleEntryTable.Id.eq(labResultTable.SaleEntryId))
              .where(
              lf.op.and(
                saleEntryTable.IsDeleted.eq(false),
                saleReceiptTable.Id.eq(saleReceiptId),
                saleEntryTable.HasPaid.eq(true),
                sellableItemTable.ServiceDepartmentId.eq(departmentId),
                labResultTable.Id.neq(null)
              )
              ).exec().then(function (salentries) {
                deferred.resolve(salentries);
              });
          } else if (startDate && endDate != undefined) {

            db.select()
              .from(saleEntryTable)

              .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
              .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
              .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
              .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
              .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
              .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
              .leftOuterJoin(schemePlanTable, schemeMembershipTable.SchemePlansId.eq(schemePlanTable.Id))
              .leftOuterJoin(schemeTable, schemePlanTable.SchemeId.eq(schemeTable.Id))
              .leftOuterJoin(testParameterTable, sellableItemTable.Id.eq(testParameterTable.SellableItemId))
              .leftOuterJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
              .leftOuterJoin(labResultTable, saleEntryTable.Id.eq(labResultTable.SaleEntryId))
              .where(
              lf.op.and(
                saleEntryTable.IsDeleted.eq(false),
                saleTable.RequestDate.between(startDate, endDate),
                saleEntryTable.HasPaid.eq(true),
                sellableItemTable.ServiceDepartmentId.eq(departmentId),
                labResultTable.Id.neq(null)
              )
              ).exec().then(function (salentries) {
                deferred.resolve(salentries);
              });
          }
        }
      });
      return deferred.promise;
    }

    function GetPreparedResult(saleEntryId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleEntryTable = db.getSchema().table('SaleEntry');

        var testParameterTable = db.getSchema().table('TestParameter');
        var labResultTable = db.getSchema().table('LabResult');
        var labResultEntryTable = db.getSchema().table('LabResultEntries')
        db.select()
          .from(labResultEntryTable)

          .innerJoin(labResultTable, labResultEntryTable.LabResultId.eq(labResultTable.Id))
          .innerJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
          .innerJoin(testParameterTable, labResultEntryTable.TestParameterId.eq(testParameterTable.Id))
          .where(
          lf.op.and(
            labResultEntryTable.IsDeleted.eq(false),
            labResultTable.SaleEntryId.eq(saleEntryId),
            saleEntryTable.HasPaid.eq(true)
          )
          ).exec().then(function (labresult) {
            deferred.resolve(labresult);
          });
      });
      return deferred.promise;
    }

    function UpdateLabResult(labResult) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('LabResult');
        db.update(table).
          set(table.Sickling, (labResult.Sickling)).
          set(table.SensitiveTo, labResult.SensitiveTo).
          set(table.ResistantTo, labResult.ResistantTo).
          set(table.NatureOfSpecimen, labResult.NatureOfSpecimen).
          set(table.HasSentToDoctor, (labResult.HasSentToDoctor)).
          set(table.Microscopy, labResult.Microscopy).
          set(table.HbGenotype, labResult.HbGenotype).
          set(table.Gross, labResult.Gross).
          set(table.Culture, (labResult.Culture)).
          set(table.ResultComment, labResult.ResultComment).
          set(table.Appearance, labResult.Appearance).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(labResult.Id)).
          exec();
      });
    }

    function UpdateXrayResult(xrayResult) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('RadiologyResult');
        db.update(table).
          set(table.NumberOfFilms, (xrayResult.NumberOfFilms)).
          set(table.FilmSize, xrayResult.FilmSize).
          set(table.DatePrepared, xrayResult.DatePrepared).
          set(table.PreparedBy, xrayResult.PreparedBy).
          set(table.IsSentToDoctor, (xrayResult.IsSentToDoctor)).
          set(table.Note, xrayResult.Note).
          set(table.VerifiersComment, xrayResult.VerifiersComment).
          set(table.IsVerified, xrayResult.IsVerified).
          set(table.IsVerifiedBy, (xrayResult.IsVerifiedBy)).
          set(table.DateVerified, xrayResult.DateVerified).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(xrayResult.Id)).
          exec();
      });
    }

    function UpdateLabResultEntry(labResultEntry) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('LabResultEntries');
        db.update(table).
          set(table.Result, (labResultEntry.Result)).
          set(table.AntigenH, labResultEntry.AntigenH).
          set(table.AntigenO, labResultEntry.AntigenO).
          set(table.Algorithm, labResultEntry.Algorithm).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(labResultEntry.Id)).
          exec();
      });
    }

    function GetLabResults(startDate, endDate, departmentId, isVerifiedResults) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var labResultTable = db.getSchema().table('LabResult');
        var labResultEntries = db.getSchema().table('LabResultEntries');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var sellableItemId = db.getSchema().table('SellableItem');
        var saleTable = db.getSchema().table('Sale');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');

        if (departmentId != undefined) {
          db.select()
            .from(labResultTable)

            .leftOuterJoin(labResultEntries, labResultTable.Id.eq(labResultEntries.LabResultId))
            .leftOuterJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
            .leftOuterJoin(sellableItemId, saleEntryTable.SellableItemId.eq(sellableItemId.Id))
            .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))

            .where(
            lf.op.and(
              labResultTable.IsDeleted.eq(false),
              labResultTable.DateEntered.between(startDate, endDate),
              sellableItemId.ServiceDepartmentId.eq(departmentId),
              labResultTable.IsVerified.eq(isVerifiedResults)
            )
            ).exec().then(function (labResults) {
              deferred.resolve(labResults);
            });
        } else {
          db.select()
            .from(labResultTable)

            .leftOuterJoin(labResultEntries, labResultTable.Id.eq(labResultEntries.LabResultId))
            .leftOuterJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
            .leftOuterJoin(sellableItemId, saleEntryTable.SellableItemId.eq(sellableItemId.Id))
            .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .leftOuterJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))

            .where(
            lf.op.and(
              labResultTable.IsDeleted.eq(false),
              labResultTable.DateEntered.between(startDate, endDate),
              lf.op.or(
                labResultTable.IsVerified.eq(true),
                labResultTable.HasSentToDoctor.eq(true)
              )
            )
            ).exec().then(function (labResults) {
              deferred.resolve(labResults);
            });
        }


      });
      return deferred.promise;
    }

    function GetLabResult(resultId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var labResultTable = db.getSchema().table('LabResult');
        var labResultEntries = db.getSchema().table('LabResultEntries');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var sellableItemId = db.getSchema().table('SellableItem');
        var saleTable = db.getSchema().table('Sale');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var testParameterTable = db.getSchema().table('TestParameter');

        db.select()
          .from(labResultTable)

          .innerJoin(labResultEntries, labResultTable.Id.eq(labResultEntries.LabResultId))
          .innerJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
          .innerJoin(sellableItemId, saleEntryTable.SellableItemId.eq(sellableItemId.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(testParameterTable, labResultEntries.TestParameterId.eq(testParameterTable.Id))
          .where(
          lf.op.and(
            labResultTable.IsDeleted.eq(false),
            labResultTable.Id.eq(resultId)
          )
          ).exec().then(function (labResults) {
            deferred.resolve(labResults);
          })
      });
      return deferred.promise;
    }

    function SubmitVerificationData(data) {
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('LabResult');
        db.update(table)
          .set(table.VerificationComment, data.VerificationComment)
          .set(table.DateEntered, new Date())
          .set(table.VerifiedBy, data.VerifiedBy)
          .set(table.IsVerified, data.IsVerified)
          .set(table.LastModifiedDate, new Date())
          .set(table.HasSentToDoctor, data.HasSentToDoctor)
          .where(
          table.Id.eq(data.Id)
          ).exec();
      });
    }

    function GetLabResultForView(resultId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var labResultTable = db.getSchema().table('LabResult');
        var labResultEntries = db.getSchema().table('LabResultEntries');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var departmentTable = db.getSchema().table('Department')
        var sellableItemTable = db.getSchema().table('SellableItem');
        var genderTable = db.getSchema().table('Gender');
        var saleTable = db.getSchema().table('Sale');
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var testParameterTable = db.getSchema().table('TestParameter');


        db.select(departmentTable.Name.as('DepartmentName'), patientTable.OtherNames.as('OtherNames'), patientTable.Number.as('PatientNumber'), patientTable.Surname.as('Surname'), patientTable.DateOfBirth.as('DateOfBirth'),
          saleEntryTable.Specimen.as('Specimen'), genderTable.Name.as('Sex'), labResultTable.Number.as('Result Number'), saleTable.RequestDate.as('RequestDate'), saleEntryTable.DateOfSampleCollection.as('Date of Sample Collection'),
          testParameterTable.Name.as('Parameter'), saleEntryTable.Name.as('Test'), labResultTable.VerificationComment.as('VerifierComment'), saleEntryTable.DateOfSampleCollection.as('DateOfSpecimenCollection'), testParameterTable.Range.as('Range'), labResultEntries.Result.as('Result'), saleTable.Number.as('LabNumber'))
          .from(labResultTable)

          .innerJoin(labResultEntries, labResultTable.Id.eq(labResultEntries.LabResultId))
          .innerJoin(saleEntryTable, labResultTable.SaleEntryId.eq(saleEntryTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(departmentTable, sellableItemTable.ServiceDepartmentId.eq(departmentTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .innerJoin(testParameterTable, labResultEntries.TestParameterId.eq(testParameterTable.Id))
          .where(
          lf.op.and(
            labResultTable.IsDeleted.eq(false),
            labResultTable.Id.eq(resultId)
          )
          ).exec().then(function (labResults) {
            deferred.resolve(labResults);
          })
      });
      return deferred.promise;
    }

    function GetDefaultLocation() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var locationTable = db.getSchema().table('Department');

        db.select()
          .from(locationTable)
          .where(
          lf.op.and(
            locationTable.IsDeleted.eq(false),
            locationTable.Category.eq('Default')
          )
          ).exec().then(function (location) {
            deferred.resolve(location);
          })
      });
      return deferred.promise;
    }

    function GetHospitalScheme() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var schemeTable = db.getSchema().table('Scheme');
        db.select()
          .from(schemeTable)
          .where(
          lf.op.and(
            schemeTable.IsDeleted.eq(false),
            schemeTable.Name.eq('HOSPITAL SCHEME')
          )
          ).exec().then(function (scheme) {
            deferred.resolve(scheme);
          })
      });
      return deferred.promise;
    }

    function GetPatientEncounters(patientId, startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var patientTable = db.getSchema().table('Patient');

        var gender = db.getSchema().table('Gender');
        var maritalState = db.getSchema().table('MaritalState');
        var religion = db.getSchema().table('Religion');
        var encounterTable = db.getSchema().table('Encounter');
        var wardStay = db.getSchema().table('WardStayHistory');
        var schemeMembership = db.getSchema().table('SchemeMembership');
        var scheme = db.getSchema().table('Scheme');
        var currentBed = db.getSchema().table('Bed');
        var oldBed = db.getSchema().table('Bed').as('OldBed');
        var currentWard = db.getSchema().table('Department');
        var oldWard = db.getSchema().table('Department').as('OldWard');
        var schemePlansTable = db.getSchema().table('SchemePlans');
        //  var searchTextMatcher = new RegExp(searchText, "i");
        db.select().
          from(encounterTable).
          innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id)).
          innerJoin(gender, patientTable.GenderId.eq(gender.Id)).
          innerJoin(maritalState, patientTable.MaritalStateId.eq(maritalState.Id)).
          leftOuterJoin(religion, patientTable.ReligionId.eq(religion.Id)).
          leftOuterJoin(wardStay, encounterTable.Id.eq(wardStay.EncounterId)).
          leftOuterJoin(schemeMembership, patientTable.Id.eq(schemeMembership.PatientId)).
          leftOuterJoin(schemePlansTable, schemeMembership.SchemePlansId.eq(schemePlansTable.Id)).
          leftOuterJoin(scheme, schemePlansTable.SchemeId.eq(scheme.Id)).
          leftOuterJoin(currentBed, wardStay.NewBedId.eq(currentBed.Id)).
          leftOuterJoin(oldBed, wardStay.OldBedId.eq(oldBed.Id)).
          leftOuterJoin(currentWard, currentBed.DepartmentId.eq(currentWard.Id)).
          leftOuterJoin(oldWard, oldBed.DepartmentId.eq(oldWard.Id)).
          orderBy(encounterTable.LocalId, lf.Order.DESC)
          .where(
          lf.op.and(
            encounterTable.IsDeleted.eq(false),
            patientTable.Id.eq(patientId),
            encounterTable.StartDate.between(startDate, endDate)
          )
          ).exec().then(function (encounters) {
            var uniqueEncounters = _.uniqBy(encounters, 'Encounter.LocalId');
            deferred.resolve(uniqueEncounters);
          })
      });
      return deferred.promise;
    }


    function GetFreeBedsBeds() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        //var departmentTable = db.getSchema().table('Department');

        var bedTable = db.getSchema().table('Bed');

        db.select().
          from(bedTable).

          ///innerJoin(departmentTable, bedTable.DepartmentId.eq(departmentTable.Id)).
          where(
          lf.op.and(
            bedTable.Id.neq('301')
          )
          ).exec().
          then(function (beds) {
            // var uniqueBeds = _.uniqBy(beds, 'Bed.LocalId');
            deferred.resolve(beds);
          });
      });

      return deferred.promise;
    }

    function GetAllOpenEncounters() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {


        var wardStayTable = db.getSchema().table('WardStayHistory');

        db.select().
          from(wardStayTable).


          where(
          lf.op.and(
            wardStayTable.Id.neq('3014'),
            wardStayTable.IsDischarged.eq(false)
          )
          ).exec().
          then(function (wardStay) {

            deferred.resolve(wardStay);
          });
      });

      return deferred.promise;
    }




    function UpdateWardStay(wardStay) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var table = db.getSchema().table('WardStayHistory');
        db.update(table)
          .set(table.EndDate, wardStay.DischargeDate)
          .set(table.IsDischarged, wardStay.IsDischarged)
          .set(table.DischargeStatus, wardStay.DischargeStatus)
          .set(table.DischargedByStatus, wardStay.DischargedByStatus)
          .set(table.DischargedBy, wardStay.DischargedBy)
          .set(table.DischargeDate, wardStay.DischargeDate)
          .set(table.LastModifiedDate, new Date())
          .where(
          table.Id.eq(wardStay.Id)
          ).exec().then(function (result) {
            deferred.resolve(result);
          });
      });
      return deferred.promise;
    }

    function FinalizeAndUnfinalizeBills(encounterId, toFinalize) {
      lovefield.getDB().then(function (db) {
        var saleTable = db.getSchema().table('Sale');


        db.select(saleTable.Id.as('Id'))
          .from(saleTable)

          .where(lf.op.and(saleTable.IsDeleted.eq(false), saleTable.IsFinalized.eq(!toFinalize), saleTable.EncounterId.eq(encounterId)))
          .exec().then(function (saleIds) {
            if (saleIds.length > 0) {
              saleIds.map(function (saleId) {
                db.update(saleTable)
                  .set(saleTable.IsFinalized, (toFinalize))
                  .set(saleTable.LastModifiedDate, new Date())
                  .where(saleTable.Id.eq(saleId.Id))
                  .exec().then(function (sale) {
                    //  console.log(sale);
                  });
              });
            }
          });
      });
    }

    function GetDrugFlowEntries(departmentId, sellableItemId, startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var departmentTable = db.getSchema().table('Department');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var staffMemberTable = db.getSchema().table('StaffMember');

        var drugformulationTable = db.getSchema().table('DrugFormulation');
        var drugclassificationTable = db.getSchema().table('DrugClassification');

        db.select(drugclassificationTable.Name.as('Classification'), drugformulationTable.Name.as('Formulation'), staffMemberTable.Username.as('Transaction By'),
          dispatchLogTable.Date.as('Date'), dispatchLogTable.Description.as('Description'), sellableItemTable.Name.as('Name'), sellableItemTable.BrandName.as('BrandName'), dispatchLogTable.Number.as('RefNo'), dispatchLogTable.InvoiceNumber.as('InvoiceNumber'), dispatchLogTable.Quantity.as('Quantity'), dispatchLogTable.FinalStockCount.as('Balance'), dispatchLogTable.InitialStockCount.as('InitialCount'))
          .from(dispatchLogTable)

          .innerJoin(departmentTable, dispatchLogTable.DepartmentId.eq(departmentTable.Id))
          .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))

          .leftOuterJoin(drugformulationTable, sellableItemTable.DrugFormulationId.eq(drugformulationTable.Id))
          .leftOuterJoin(drugclassificationTable, sellableItemTable.DrugClassificationId.eq(drugclassificationTable.Id))
          .orderBy(dispatchLogTable.Date, lf.Order.ASC)
          .where(
          lf.op.and(
            dispatchLogTable.DepartmentId.eq(departmentId),
            dispatchLogTable.SellableItemId.eq(sellableItemId),
            dispatchLogTable.Date.between(startDate, endDate)
          )
          ).exec().then(function (drugFlows) {
            deferred.resolve(drugFlows);
          });
      });
      return deferred.promise;
    }

    function GetRequestStatus(patientId, prefix, startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var labresultTable = db.getSchema().table('LabResult')
        var labResultEntriesTable = db.getSchema().table('LabResultEntries');
        var searchTextMatcher = new RegExp(prefix, "i");
        db.select()
          .from(saleEntryTable)

          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(labresultTable, saleEntryTable.Id.eq(labresultTable.SaleEntryId))
          .leftOuterJoin(labResultEntriesTable, labresultTable.Id.eq(labResultEntriesTable.LabResultId))
          .where(
          lf.op.and(
            patientTable.Id.eq(patientId),
            saleTable.Number.match(searchTextMatcher),
            //   saleEntryTable.TransactionDate.between(startDate, endDate),
            saleEntryTable.IsDeleted.eq(false)
          )
          ).exec().then(function (requests) {
            deferred.resolve(requests)
          });
      });
      return deferred.promise;
    }

    function GetDrugWithdrawalCodes(supplierId, startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var drugWithdrawalTable = db.getSchema().table('DrugWithdrawals');
        var supplierTable = db.getSchema().table('SupplierRegister');

        db.select()
          .from(drugWithdrawalTable)

          .innerJoin(supplierTable, drugWithdrawalTable.SupplierId.eq(supplierTable.Id))
          .where(
          lf.op.and(
            drugWithdrawalTable.IsDeleted.eq(false),
            drugWithdrawalTable.SupplierId.eq(supplierId),
            drugWithdrawalTable.Date.between(startDate, endDate)
          )
          ).exec().then(function (withdrawals) {
            deferred.resolve(withdrawals);
          });
      });
      return deferred.promise;
    }

    function GetDrugWithdrawals(withdrawalNumber) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var drugWithdrawalTable = db.getSchema().table('DrugWithdrawals');
        var supplierTable = db.getSchema().table('SupplierRegister');
        var dispatchLogTable = db.getSchema().table('SellableItemDispatchlog');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var staffMemberTable = db.getSchema().table('StaffMember');
        var departmentTable = db.getSchema().table('Department');
        db.select(dispatchLogTable.Quantity.as('QuantityReturned'), dispatchLogTable.ExpiryDate.as('ExpiryDate'), dispatchLogTable.InvoiceNumber.as('InvoiceNumber'),
          dispatchLogTable.BatchNumber.as('BatchNumber'), dispatchLogTable.Amount.as('Amount'), sellableItemTable.Name.as('ItemName'), sellableItemTable.BrandName.as('ItemBrandName'),
          staffMemberTable.LastName.as('LastName'), staffMemberTable.OtherNames.as('OtherNames'), departmentTable.Name.as('OutletName'), supplierTable.SupplierName.as('CompanyName'),
          dispatchLogTable.Number.as('CaptureCode'), dispatchLogTable.Date.as('Date'))
          .from(dispatchLogTable)

          .innerJoin(drugWithdrawalTable, dispatchLogTable.Number.eq(drugWithdrawalTable.Number))
          .innerJoin(sellableItemTable, dispatchLogTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(supplierTable, drugWithdrawalTable.SupplierId.eq(supplierTable.Id))
          .innerJoin(staffMemberTable, dispatchLogTable.StaffMemberId.eq(staffMemberTable.Id))
          .innerJoin(departmentTable, dispatchLogTable.DepartmentId.eq(departmentTable.Id))
          .where(
          lf.op.and(
            dispatchLogTable.IsDeleted.eq(false),
            drugWithdrawalTable.Number.eq(withdrawalNumber)
          )
          ).exec().then(function (withdrawals) {
            deferred.resolve(withdrawals);
          });
      });
      return deferred.promise;
    }

    function GetPendingRadiologyRequests() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var religionTable = db.getSchema().table('Religion');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var radiologyResultTable = db.getSchema().table('RadiologyResult')
        db.select()
          .from(patientTable)

          .innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId))

          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .innerJoin(saleTable, encounterTable.Id.eq(saleTable.EncounterId))
          .innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(serviceDepartmentTable, sellableItemTable.ServiceDepartmentId.eq(serviceDepartmentTable.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            radiologyResultTable.Id.eq(null),
            serviceDepartmentTable.Category.eq('Radiology Unit'),
            saleEntryTable.TransactionDate.between(new Date(new Date().setDate(new Date().getDate() - 30)), new Date())
          )
          ).exec().then(function (requests) {
            var uniqueRequests = _.uniqBy(requests, 'Patient.LocalId');
            deferred.resolve(uniqueRequests);
          });
      });
      return deferred.promise;
    }

    function GetPreparedResults() {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var religionTable = db.getSchema().table('Religion');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var radiologyResultTable = db.getSchema().table('RadiologyResult')
        db.select()
          .from(patientTable)

          .innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId))
          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .innerJoin(saleTable, encounterTable.Id.eq(saleTable.EncounterId))
          .innerJoin(saleEntryTable, saleTable.Id.eq(saleEntryTable.SaleId))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(serviceDepartmentTable, sellableItemTable.ServiceDepartmentId.eq(serviceDepartmentTable.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .where(
          lf.op.and(
            patientTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            radiologyResultTable.Id.neq(null),
            serviceDepartmentTable.Category.eq('Radiology Unit'),
            radiologyResultTable.DatePrepared.between(new Date(new Date().setDate(new Date().getDate() - 30)), new Date())
          )
          ).exec().then(function (results) {
            var uniqueResults = _.uniqBy(results, 'Patient.LocalId');
            deferred.resolve(uniqueResults);
          });
      });
      return deferred.promise;
    }

    function GetPreparedRadiologyRequestsByPatientId(patientId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var radiologyResultTable = db.getSchema().table('RadiologyResult');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var genderTable = db.getSchema().table('Gender');
        var religionTable = db.getSchema().table('Religion');
        db.select()
          .from(saleEntryTable)

          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(serviceDepartmentTable, sellableItemTable.ServiceDepartmentId.eq(serviceDepartmentTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            serviceDepartmentTable.Category.eq('Radiology Unit'),
            patientTable.Id.eq(patientId),
            radiologyResultTable.Id.neq(null)
          )
          ).exec().then(function (requests) {
            var uniqueRequests = _.uniqBy(requests, 'SaleEntry.LocalId');
            deferred.resolve(uniqueRequests);
          });
      });
      return deferred.promise;
    }

    function GetRadiologyRequests(patientId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var radiologyResultTable = db.getSchema().table('RadiologyResult');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var genderTable = db.getSchema().table('Gender');
        var religionTable = db.getSchema().table('Religion');
        db.select()
          .from(saleEntryTable)

          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(serviceDepartmentTable, sellableItemTable.ServiceDepartmentId.eq(serviceDepartmentTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(radiologyResultTable, saleEntryTable.Id.eq(radiologyResultTable.SaleEntryId))
          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleEntryTable.HasPaid.eq(true),
            serviceDepartmentTable.Category.eq('Radiology Unit'),
            patientTable.Id.eq(patientId)
          )
          ).exec().then(function (requests) {
            var uniqueRequests = _.uniqBy(requests, 'SaleEntry.LocalId');
            deferred.resolve(uniqueRequests);
          });
      });
      return deferred.promise;
    }

    function GetCompiledShifts_DepositCollection(compilationNumber) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var compilationTable = db.getSchema().table('ShiftCompilation');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var revenueDepartmentTable = db.getSchema().table('RevenueDepartment');
        var depositTable = db.getSchema().table('Deposit');
        var staffMemberTable = db.getSchema().table('StaffMember');

        db.select(revenueDepartmentTable.Name.as('RevName'), revenueDepartmentTable.Id.as('RevId'), depositTable.Id.as('FieldIdentity'), depositTable.TotalAmount.as('Amount'), depositTable.Id.as('DepositId'), posWorkShiftTable.Number.as('ShiftNumber'),
          posWorkShiftTable.StartDate.as('Shift Date'), depositTable.TotalAmount.as('ItemAmount'), staffMemberTable.Username.as('Username'))
          .from(compilationTable)

          .innerJoin(posWorkShiftTable, compilationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
          .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
          .leftOuterJoin(depositTable, posWorkShiftTable.Id.eq(depositTable.PosWorkShiftId))
          .leftOuterJoin(revenueDepartmentTable, depositTable.RevenueDepartmentId.eq(revenueDepartmentTable.Id))
          .where(
          lf.op.and(
            compilationTable.IsDeleted.eq(false),
            compilationTable.Number.eq(compilationNumber),
            depositTable.Description.eq('Deposit Made'),
            depositTable.IsCancelled.eq(false)
          )
          ).exec().then(function (shifts) {
            deferred.resolve(shifts);
          });
      });
      return deferred.promise;
    }

    function GetCompiledShifts_SaleCollection(compilationNumber) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var compilationTable = db.getSchema().table('ShiftCompilation');
        var posWorkShiftTable = db.getSchema().table('PosWorkShift');
        var revenueDepartmentTable = db.getSchema().table('RevenueDepartment');
        var paymentModeTable = db.getSchema().table('PaymentMode');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var staffMemberTable = db.getSchema().table('StaffMember');

        db.select(revenueDepartmentTable.Name.as('RevName'), revenueDepartmentTable.Id.as('RevId'), saleEntryTable.Id.as('FieldIdentity'), saleReceiptTable.TotalAmount.as('Amount'), saleReceiptTable.Id.as('SaleReceiptId'), saleEntryTable.Id.as('SaleEntryId'), posWorkShiftTable.Number.as('ShiftNumber'),
          posWorkShiftTable.StartDate.as('Shift Date'), saleEntryTable.ReceiptAmount.as('ItemAmount'), staffMemberTable.Username.as('Username'))
          .from(compilationTable)

          .innerJoin(posWorkShiftTable, compilationTable.Id.eq(posWorkShiftTable.ShiftCompilationId))
          .innerJoin(staffMemberTable, posWorkShiftTable.StaffMemberId.eq(staffMemberTable.Id))
          .leftOuterJoin(saleReceiptTable, posWorkShiftTable.Id.eq(saleReceiptTable.PosWorkShiftId))
          .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
          .leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .leftOuterJoin(revenueDepartmentTable, sellableItemTable.RevenueDepartmentId.eq(revenueDepartmentTable.Id))
          .where(
          lf.op.and(
            compilationTable.IsDeleted.eq(false),
            compilationTable.Number.eq(compilationNumber),
            saleReceiptTable.IsCancelled.eq(false)
          )
          ).exec().then(function (shifts) {
            deferred.resolve(shifts);
          });
      });
      return deferred.promise;
    }

    function GetDailyCashReportForServices(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');

        db.select(lf.fn.max(sellableItemTable.Name).as('Service'),
          lf.fn.max(serviceDepartmentTable.Name).as('Department'),
          lf.fn.max(serviceDepartmentTable.Category).as('Category'),
          lf.fn.sum(saleEntryTable.ReceiptAmount).as('Amount'))
          .from(saleEntryTable)
          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
          .innerJoin(serviceDepartmentTable, saleEntryTable.BillingOutletId.eq(serviceDepartmentTable.Id))
          .groupBy(sellableItemTable.Id)
          .exec()
          .then(function (results) {
            deferred.resolve(results);
          });
      });
      return deferred.promise;
    }

    function CancelReceipt(receipt, isDeposit) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var table = isDeposit ? db.getSchema().table('Deposit') : db.getSchema().table('SaleReceipt');
        db.update(table).
          set(table.IsCancelled, true).
          set(table.LastModifiedDate, new Date()).
          where(
          table.Id.eq(receipt.Id)).
          exec().then(
          function () {
            deferred.resolve();
          });
      });
      return deferred.promise;
    }

    function GetDepositReceiptBySearchText(searchText) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var depositReceiptTable = db.getSchema().table('Deposit');

        var encounterTable = db.getSchema().table('Encounter');
        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var religionTable = db.getSchema().table('Religion');
        var maritalStateTable = db.getSchema().table('MaritalState');
        var searchTextMatcher = new RegExp(searchText, "i");

        db.select().
          from(depositReceiptTable)

          .leftOuterJoin(encounterTable, depositReceiptTable.EncounterId.eq(encounterTable.Id))
          .leftOuterJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .leftOuterJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .leftOuterJoin(maritalStateTable, patientTable.MaritalStateId.eq(maritalStateTable.Id))
          .leftOuterJoin(religionTable, patientTable.ReligionId.eq(religionTable.Id))
          .where(
          lf.op.and(
            depositReceiptTable.IsDeleted.eq(false),
            depositReceiptTable.IsCancelled.eq(false),

            //saleEntryTable.HasPaid.eq(true),
            //sellableItemTable.IsDrug.eq(isDrug),
            lf.op.or(
              depositReceiptTable.Number.match(searchTextMatcher),
              patientTable.OtherNames.match(searchTextMatcher),
              patientTable.Number.match(searchTextMatcher),
              patientTable.Surname.match(searchTextMatcher)
            )
          )
          ).exec().
          then(function (depositReceipts) {

            var uniqueReceipts = _.uniqBy(depositReceipts, 'Deposit.LocalId');
            deferred.resolve(uniqueReceipts);
          });
      });
      return deferred.promise;
    }

    function GetReceiptListing(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        //var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');

        db.select(
          saleTable.CustomerName.as('PatientName'),
          saleTable.CustomerPhone.as('PatientNumber'),
          saleReceiptTable.ReceiptDate.as('Date'),
          saleReceiptTable.TotalAmount.as('Amount'),
          saleReceiptTable.Number.as('ReceiptNumber'),
          saleReceiptTable.LocalId.as('LocalId'),
          saleReceiptTable.Id.as('Id')
        )
          .from(saleReceiptTable)
          .leftOuterJoin(saleEntryTable, saleReceiptTable.Id.eq(saleEntryTable.SalesReceiptId))
          //.leftOuterJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))

          .leftOuterJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .where(
          lf.op.and(saleReceiptTable.ReceiptDate.between(startDate, endDate),
            saleReceiptTable.IsCancelled.eq(false)
          )
          )
          .exec()
          .then(function (saleReceipts) {
            debugger;
            var uniqueReceipts = _.uniqBy(saleReceipts, 'LocalId');
            deferred.resolve(uniqueReceipts);
          });
      });
      return deferred.promise;
    }


    function GetDepositListing(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var serviceDepartmentTable = db.getSchema().table('Department');
        var depositTable = db.getSchema().table('Deposit');

        db.select(
          depositTable.PayerName.as('PatientName'),
          depositTable.PayerNumber.as('PatientNumber'),
          depositTable.ReceiptDate.as('Date'),
          depositTable.TotalAmount.as('Amount'),
          depositTable.Number.as('ReceiptNumber')
        )
          .from(depositTable)
          .where(
          lf.op.and(depositTable.ReceiptDate.between(startDate, endDate),
            depositTable.IsCancelled.eq(false)
          )
          )
          .exec()
          .then(function (depositReceipts) {
            // var uniqueReceipts = _.uniqBy(depositReceipts, 'SaleReceipt.LocalId');
            deferred.resolve(depositReceipts);
          });
      });
      return deferred.promise;
    }

    function GetNewPatients(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');

        db.select(
          patientTable.Surname.as('Surname'),
          patientTable.OtherNames.as('OtherNames'),
          patientTable.Number.as('PatientNumber'),
          patientTable.RegistrationDate.as('Date'),
          patientTable.DateOfBirth.as('DateOfBirth'),
          genderTable.Name.as('GenderName')
        )
          .from(patientTable)
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .where(
          lf.op.and(
            patientTable.RegistrationDate.between(startDate, endDate),
            patientTable.RegistrationMode.eq("New")
          )
          )
          .exec()
          .then(function (patients) {
            deferred.resolve(patients);
          });
      });
      return deferred.promise;
    }

    function GetOldPatients(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('GenderName');

        db.select(
          patientTable.Surname.as('Surname'),
          patientTable.OtherNames.as('OtherNames'),
          patientTable.Number.as('PatientNumber'),
          patientTable.RegistrationDate.as('Date'),
          patientTable.DateOfBirth.as('DateOfBirth'),
          genderTable.Name.as('Gender')
        )
          .from(patientTable)
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .where(
          lf.op.and(
            patientTable.ReceiptDate.between(startDate, endDate),
            patientTable.RegistrationMode.eq("Old")
          )
          )
          .exec()
          .then(function (patients) {
            deferred.resolve(patients);
          });
      });
      return deferred.promise;
    }

    function GetRevisits(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var genderTable = db.getSchema().table('Gender');
        var encounterTable = db.getSchema().table('Encounter');

        db.select(
          patientTable.Surname.as('Surname'),
          patientTable.OtherNames.as('OtherNames'),
          patientTable.Number.as('PatientNumber'),
          encounterTable.StartDate.as('Date'),
          patientTable.DateOfBirth.as('DateOfBirth'),
          genderTable.Name.as('GenderName')
        )
          .from(patientTable)
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))
          .innerJoin(encounterTable, patientTable.Id.eq(encounterTable.PatientId))
          .where(
          encounterTable.StartDate.between(startDate, endDate)
          )
          .exec()
          .then(function (patients) {
            deferred.resolve(patients);
          });
      });
      return deferred.promise;
    }

    function GetSchemeDiscountUpdates(startDate, endDate, forDrugs, drugSearchby, serviceSearchBy, patientId, schemeId, drugId) {
      var deferred = $q.defer();

      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var schemeTable = db.getSchema().table('Scheme');
        var schemeMembershipTable = db.getSchema().table('SchemeMembership');
        var sellableItemTable = db.getSchema().table('SellableItem');
        var discountUpdateTable = db.getSchema().table('SchemeDiscountUpdates');
        var wardstayhistoryTable = db.getSchema().table('WardStayHistory');

        //drugs and searchby is all or services and search by is all
        if ((forDrugs && drugSearchby == 'All') || (!forDrugs && serviceSearchBy == 'All' && schemeId == 'All')) {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs)
            )
            ).exec().then(function (results) {

              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        }
        //drugs and search by is patient OR service and searchby is patient and scheme is all for service
        else if ((forDrugs && drugSearchby == 'patient') || (!forDrugs && serviceSearchBy == 'Specific' && schemeId == 'All')) {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              patientTable.Id.eq(patientId)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        }

        //drugs and search by is scheme or service and patient filter by is all and a scheme is selected
        else if (((forDrugs && drugSearchby == 'scheme') || (!forDrugs && (serviceSearchBy == 'All'))) && schemeId != 'All') {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              schemeTable.Id.eq(schemeId)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        } else if (((forDrugs && drugSearchby == 'scheme') || (!forDrugs && (serviceSearchBy == 'All'))) && schemeId == 'All') {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        }

        //drugs and search by is drugs
        else if (forDrugs && drugSearchby == 'drug' && drugId != null) {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              sellableItemTable.Id.eq(drugId)
            )
            ).exec().then(function (results) {

              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        } else if (!forDrugs && serviceSearchBy == 'Discharged' && schemeId == 'All') {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              wardstayhistoryTable.IsDischarged.eq(true)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        } else if (!forDrugs && serviceSearchBy == 'Discharged' && schemeId != 'All') {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              wardstayhistoryTable.IsDischarged.eq(true),
              schemeTable.Id.eq(schemeId)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        } else if (!forDrugs && serviceSearchBy == 'Specific' && schemeId != 'All') {
          db.select(patientTable.Number.as('Patient No'), discountUpdateTable.Id.as('Id'), patientTable.Surname.as('LastName'), patientTable.OtherNames.as('OtherNames'),
            schemeMembershipTable.CardHolderInsuranceNumber.as('Scheme No'), saleEntryTable.Name.as('Item'), saleEntryTable.Price.as('Price'),
            saleEntryTable.Quantity.as('Quantity'), discountUpdateTable.PercentageAdded.as('Discount'), discountUpdateTable.DateOfUpdate.as('Date'), schemeTable.Name.as('Scheme Name'))
            .from(discountUpdateTable)

            .innerJoin(saleEntryTable, discountUpdateTable.SaleEntryId.eq(saleEntryTable.Id))
            .innerJoin(sellableItemTable, saleEntryTable.SellableItemId.eq(sellableItemTable.Id))
            .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
            .innerJoin(encounterTable, saleTable.EncounterId.eq(encounterTable.Id))
            .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
            .innerJoin(schemeTable, discountUpdateTable.SchemeId.eq(schemeTable.Id))
            .leftOuterJoin(wardstayhistoryTable, encounterTable.Id.eq(wardstayhistoryTable.EncounterId))
            .leftOuterJoin(schemeMembershipTable, patientTable.Id.eq(schemeMembershipTable.PatientId))
            .where(
            lf.op.and(
              discountUpdateTable.IsDeleted.eq(false),
              discountUpdateTable.DateOfUpdate.between(startDate, endDate),
              sellableItemTable.IsDrug.eq(forDrugs),
              patientTable.Id.eq(patientId),
              schemeTable.Id.eq(schemeId)
            )
            ).exec().then(function (results) {
              results = _.uniqBy(results, 'Id');
              deferred.resolve(results);
            });
        }
      });
      return deferred.promise;
    }

    function GetWalkinPatientReceiptDetails(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var saleTable = db.getSchema().table('Sale');
        var saleEntryTable = db.getSchema().table('SaleEntry');
        var saleReceiptTable = db.getSchema().table('SaleReceipt');
        var paymentModeTable = db.getSchema().table('PaymentMode');

        db.select(saleTable.CustomerName.as('Customer Name'), saleTable.CustomerPhone.as('Customer Phone'),
          saleEntryTable.Name.as('Item'), saleEntryTable.TransactionDate.as('Date'), saleEntryTable.Quantity.as('Quantity'),
          paymentModeTable.Mode.as('Payment Mode'), saleEntryTable.Price.as('Price'), saleEntryTable.ReceiptAmount.as('Amount Paid'))
          .from(saleEntryTable)

          .innerJoin(saleTable, saleEntryTable.SaleId.eq(saleTable.Id))
          .innerJoin(saleReceiptTable, saleEntryTable.SalesReceiptId.eq(saleReceiptTable.Id))
          .innerJoin(paymentModeTable, saleReceiptTable.PaymentModeId.eq(paymentModeTable.Id))

          .where(
          lf.op.and(
            saleEntryTable.IsDeleted.eq(false),
            saleTable.EncounterId.eq(null),
            saleEntryTable.HasPaid.eq(true),
            saleEntryTable.TransactionDate.between(startDate, endDate)
          )
          ).exec().then(function (result) {
            deferred.resolve(result);
          });
      });
      return deferred.promise;
    }

    function GetDischargedPatients(startDate, endDate) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {

        var patientTable = db.getSchema().table('Patient');
        var encounterTable = db.getSchema().table('Encounter');
        var wardstayhistoryTable = db.getSchema().table('WardStayHistory');
        var staffMemberTable = db.getSchema().table('StaffMember');
        var genderTable = db.getSchema().table('Gender');

        db.select(patientTable.Surname.as('Surname'), patientTable.OtherNames.as('POtherNames'), genderTable.Name.as('Sex'),
          patientTable.DateOfBirth.as('DateOfBirth'), wardstayhistoryTable.StartDate.as('HospitizationDate'), wardstayhistoryTable.EndDate.as('DischargeDate'),
          patientTable.Number.as('Number'), wardstayhistoryTable.DischargeStatus.as('Discharge Status'), staffMemberTable.LastName.as('LastName'), staffMemberTable.OtherNames.as('SOtherNames'))
          .from(wardstayhistoryTable)

          .innerJoin(encounterTable, wardstayhistoryTable.EncounterId.eq(encounterTable.Id))
          .innerJoin(patientTable, encounterTable.PatientId.eq(patientTable.Id))
          .innerJoin(staffMemberTable, wardstayhistoryTable.DischargedBy.eq(staffMemberTable.Id))
          .innerJoin(genderTable, patientTable.GenderId.eq(genderTable.Id))

          .where(
          lf.op.and(
            wardstayhistoryTable.IsDeleted.eq(false),
            wardstayhistoryTable.IsDischarged.eq(true),
            wardstayhistoryTable.EndDate.neq(null),
            wardstayhistoryTable.EndDate.between(startDate, endDate)
          )
          ).exec().then(function (result) {
            deferred.resolve(result);
          });
      });
      return deferred.promise;
    }

    function GetConsultationTemplates(searchText, deskType, doctorsId) {
      var deferred = $q.defer();
      lovefield.getDB().then(function (db) {
        var templateTable = db.getSchema().table('ClerkingTemplates');
        var searchTextMatcher = new RegExp(searchText, 'i');
        db.select()
          .from(templateTable)
          .where(
          lf.op.and(
            templateTable.IsDeleted.eq(false),
            templateTable.ConsultationType.eq(deskType),

            templateTable.TemplateName.match(searchTextMatcher),
            lf.op.or(
              templateTable.DoctorsId.eq(null),
              templateTable.DoctorsId.eq(doctorsId)
            )
          )
          ).exec().then(function (result) {
            deferred.resolve(result);
          });
      });
      return deferred.promise;
    }


    function PingServer(uploadData) {
      return new Promise(function (resolve, reject) {

        var config = {
            headers : {
              "Content-Type": "text/plain;charset=UTF-8"
            }
        }

        lovefield.getDB().then(function (db) {
          var url = HmisConstants.baseApiUrl+"syncentities";
          var method = "POST";
          var postData = uploadData;

          $http.post(url,JSON.stringify(postData),config).then(function(response){
            var payLoad = response.data;

            // console.log('payload');
            var newDateMark = new Date(payLoad.NewEntityDateMark);
            //  console.log(payLoad);
            var downloadedDataCount = 0;
            console.log(payLoad.payload.length);

            if (payLoad.payload.length > 0) {
              payLoad.payload = JSON.parse(JSON.stringify(payLoad.payload),JSON.dateParser)
              payLoad.payload.map(function (returnedItem) {
                returnedItem.LastSynchTime = newDateMark;
                returnedItem.LocalId = null;
                var tableName = returnedItem.ObjectName;
                var id = returnedItem.Id;

                var selectedTable = db.getSchema().table(tableName);
                db.select()
                  .from(selectedTable)
                  .where(lf.op.and(

                    selectedTable.Id.neq(null),
                    selectedTable.Id.eq(id)
                  ))
                  .exec()
                  .then(function (response) {
                    if (response.length > 0) {
                      returnedItem.LocalId = response[0].LocalId;
                      returnedItem.Id = response[0].Id
                    }

                    var table = db.getSchema().table(returnedItem.ObjectName);
                    var row = table.createRow(returnedItem);

                    db.insertOrReplace()
                      .into(table)
                      .values([row])
                      .exec()
                      .then(
                      function (newEntries) {
                        downloadedDataCount++;

                        console.log(downloadedDataCount);
                        if (downloadedDataCount == payLoad.payload.length) {
                          //console.log(downloadedDataCount);
                          resolve(newEntries[0]);
                        }
                      }).catch(function (err) {
                        downloadedDataCount++;
                        console.dir(err);
                        if (downloadedDataCount == payLoad.payload.length) {
                          //console.log(downloadedDataCount);

                          var clientDatatable = db.getSchema().table('ClientData');
                          db.update(clientDatatable).
                            set(clientDatatable.Value, (newDateMark)).
                            set(clientDatatable.LastModifiedDate, new Date()).
                            where(
                            clientDatatable.Key.eq('NewEntityDateMark')).
                            exec();

                          resolve(0);
                        }
                      });
                  });
              });
            }
            else {
              resolve();
            }


          },function(erro){

            console.log("The computer appears to be offline.");
            var returnedItem = {};
            returnedItem.TotalItemCount = 0;
            returnedItem.DownloadCount = 0;
           // returnedItem.newDateMark = newDateMark;
           // self.postMessage(returnedItem);
            resolve();
          });
        });
      });
    }

    function UpdateClientData(key,value){
      lovefield.getDB().then(function (db) {
      var clientDatatable = db.getSchema().table('ClientData');
            db.update(clientDatatable).
              set(clientDatatable.Value, (value)).
              set(clientDatatable.LastModifiedDate, new Date()).
              where(
              clientDatatable.Key.eq(key)).
              exec();
            });
    }


    function SaveUpdates(returnedItem) {
      var tableName = returnedItem.ObjectName;
      var id = returnedItem.Id;

      lovefield.getDB().then(function (db) {
      var table = db.getSchema().table(tableName);
      db.select()
        .from(table)
        .where(lf.op.and(

          table.Id.neq(null),
          table.Id.eq(id)
        ))
        .exec()
        .then(function (response) {
          if (response.length > 0) {
            returnedItem.LocalId = response[0].LocalId;
          }

          var row = table.createRow(returnedItem);

          db.insertOrReplace()
            .into(table)
            .values([row])
            .exec()
            .then(
            function (newEntries) {

            }).catch(function (err) {

              console.dir(err);
            });
        });
      });
    }

    function backupDb(){
      lovefield.getDB().then(function(db){
        db.export().then(function(data) {
          // The data object contains the contents of database

          if ((typeof process !== 'undefined') && (process.release.name.search(/node|io.js/) !== -1)) {
            const fs = require('fs');
            const dir = 'C:\\backUpFiles';
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            var fileName = 'backupData'+createGuid();
           // const content = JSON.stringify(data);
           var bufferedData = new Buffer(data, "base64");
            fs.writeFile('C:\\backUpFiles\\'+fileName+'.json',bufferedData,'utf8', function(err) {
              if (err) throw err;
              console.log('The file has been saved!');
            });
          }
        });
      });
    }

    function restoreDb(data){
      lovefield.getDB().then(function(db){
        data = JSON.parse(JSON.stringify(data),JSON.dateParser);
        db.import(data).then(function(response) {
        });
      });
    }
  }


})();
